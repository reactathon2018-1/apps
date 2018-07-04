package com.buildbyte.dao;

import org.bson.Document;

import com.buildbyte.dto.UserRequestDTO;
import com.buildbyte.dto.UserResponseDTO;
import com.mongodb.MongoWriteException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

public class UserDAO {
	private final MongoCollection<Document> usersCollection;
	
	public UserDAO(final MongoDatabase mongoDatabase) {
        usersCollection = mongoDatabase.getCollection("users");
    }
	
	public UserResponseDTO addUser(UserRequestDTO req) {
		String userName = req.getUserName();
		String password = req.getPassword();
		String email = req.getEmail();
		
		UserResponseDTO res = new UserResponseDTO();
        Document user = new Document();

        user.append("_id", userName).append("password", password);

        if (email != null && !email.equals("")) {
            user.append("email", email);
        }

        try {
            usersCollection.insertOne(user);
            res.setStatus("SUCCESS");
        } catch (MongoWriteException e) {
            System.out.println("Username already in use: " + userName);
            res.setStatus("UserName already in use: " + userName);
        }
        return res;
    }
	
	public UserResponseDTO validateLogin(UserRequestDTO req) {
		UserResponseDTO res = new UserResponseDTO();
		
		String userName = req.getUserName();
		String password = req.getPassword();
		
        Document user = usersCollection.find(Filters.eq("_id", userName)).first();

        if (user == null) {
            System.out.println("User not in database");
            res.setStatus("User not in database");
            return res;
        }

        String pwd = user.get("password").toString();

        if (!pwd.equals(password)) {
            System.out.println("Submitted password is not a match");
            res.setStatus("User name and password doesn't match");
            return res;
        }
        res.setStatus("SUCCESS");
        return res;
    }
	
	public String getUserEmail(String userName) {
        Document user = usersCollection.find(Filters.eq("_id", userName)).first();

        if (user == null) {
            System.out.println("User not in database");
            return "";
        }
        return user.getString("email");
    }

}
