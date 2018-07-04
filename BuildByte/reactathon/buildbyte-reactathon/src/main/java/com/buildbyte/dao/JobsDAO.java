package com.buildbyte.dao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.buildbyte.dto.AppliedJobDetailsDTO;
import com.buildbyte.dto.JobDTO;
import com.buildbyte.dto.JobDetailsDTO;
import com.buildbyte.dto.UserRequestDTO;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class JobsDAO {
	private final SimpleDateFormat sdf  = new SimpleDateFormat("MM/dd/yyyy");
	private final MongoCollection<Document> jobsCollection;

    public JobsDAO(final MongoDatabase mongoDatabase) {
    	jobsCollection = mongoDatabase.getCollection("jobs");
    }
    
    public JobDTO getJobDetails() {
    	JobDTO jobDTO = new JobDTO();
    	List<JobDetailsDTO> jobDetailsList = new ArrayList<JobDetailsDTO>();
    	jobDTO.setJobDetails(jobDetailsList);
    	try{
	    	List<Document> jobsList = jobsCollection.find().into(new ArrayList<Document>());
	    	
	    	for(Document doc : jobsList){
	    		JobDetailsDTO jobDetailsDTO = new JobDetailsDTO();
	    		jobDetailsDTO.setJobId(doc.getString("_id"));
	    		jobDetailsDTO.setTitle(doc.getString("title"));
	    		jobDetailsDTO.setDesc(doc.getString("desc"));
	    		jobDetailsDTO.setJobLocation(doc.getString("jobLocation"));
	    		jobDetailsDTO.setPostingDate(sdf.format(doc.getDate("postingDate")));
	    		jobDetailsDTO.setApplyBefore(sdf.format(doc.getDate("applyBefore")));
	    		jobDetailsDTO.setHiringManager(doc.getString("hiringManager"));
	    		jobDetailsDTO.setHmEmail(doc.getString("hmEmail"));
	    		jobDetailsList.add(jobDetailsDTO);
	    	}
	    	jobDTO.setStatus("SUCCESS");
    	}catch(Exception e){
    		e.printStackTrace();
    		jobDTO.setStatus("System error occured. Please contact Administrator");
    	}
    	return jobDTO;
    }
    
    public JobDTO getAppliedJobsDetails(UserRequestDTO req) {
    	JobDTO jobDTO = new JobDTO();
    	List<AppliedJobDetailsDTO> appliedJobDetailsList = new ArrayList<AppliedJobDetailsDTO>();
    	jobDTO.setAppliedJobs(appliedJobDetailsList);
    	try{
    		String userName = req.getUserName();
        	if(userName == null || "".equals(userName.trim())){
        		jobDTO.setStatus("User " + userName + " is not registered or doesn't exist");
        		return jobDTO;
        	}
    		Bson filter = new Document("appliedJobs.userName",userName);
	    	List<Document> appliedJobsList = jobsCollection.find(filter).into(new ArrayList<Document>());
	    	System.out.println(appliedJobsList.size());
	    	for(Document doc : appliedJobsList){
	    		List<Document> appliedJobs = (List<Document>)doc.get("appliedJobs");
	    		for(Document appliedDoc : appliedJobs) {
	    			if(!userName.equals(appliedDoc.getString("userName"))) {
	    				continue;
	    			}
		    		AppliedJobDetailsDTO appliedJobDetailsDTO = new AppliedJobDetailsDTO();
		    		appliedJobDetailsDTO.setUserName(appliedDoc.getString("userName"));
		    		appliedJobDetailsDTO.setUserEmail(appliedDoc.getString("userEmail"));
		    		Date appliedDate = appliedDoc.getDate("appliedDate");
		    		if(appliedDate != null) {
		    			appliedJobDetailsDTO.setAppliedDate(sdf.format(appliedDate));
		    		}
		    		Date interviewDate = appliedDoc.getDate("interviewDate");
		    		if(interviewDate != null) {
		    			System.out.println(interviewDate);
		    			appliedJobDetailsDTO.setInterviewDate(sdf.format(interviewDate));
		    		}
		    		appliedJobDetailsDTO.setInterviewType(appliedDoc.getString("interviewType"));
		    		appliedJobDetailsDTO.setInterviewLocation(appliedDoc.getString("interviewLocation"));
		    		appliedJobDetailsDTO.setJobStatus(appliedDoc.getString("jobStatus"));
		    		appliedJobDetailsDTO.setHmFeedback(appliedDoc.getString("hmFeedback"));
		    		appliedJobDetailsDTO.setCanFeedback(appliedDoc.getString("canFeedback"));
		    		
		    		appliedJobDetailsList.add(appliedJobDetailsDTO);
	    		}
	    	}
	    	jobDTO.setStatus("SUCCESS");
    	}catch(Exception e){
    		e.printStackTrace();
    		jobDTO.setStatus("System error occured. Please contact Administrator");
    	}
    	return jobDTO;
    }
    
    public JobDTO insertAppliedJobDetails(AppliedJobDetailsDTO req){
    	JobDTO jobDTO = new JobDTO();
    	try{
    		Date appliedDate = Calendar.getInstance().getTime();
    		Calendar c = Calendar.getInstance();
    		c.add(Calendar.DAY_OF_WEEK, 5);
    		Date interviewDate = c.getTime();
    		String jobStatus = "Interview Scheduled";
    		jobsCollection.updateOne(new Document("_id", req.getJobId()), new Document("$push",
    				new Document("appliedJobs",new Document("userName",req.getUserName())
    						.append("userEmail", req.getUserEmail()).append("appliedDate", appliedDate)
    						.append("interviewType", req.getInterviewType()).append("interviewDate", interviewDate)
    						.append("interviewLocation", req.getInterviewLocation())
    						.append("jobStatus", jobStatus).append("hmFeedback", "")
    						.append("canFeedback", ""))));
    		jobDTO.setStatus("SUCCESS");
    	}catch(Exception e){
    		e.printStackTrace();
    		jobDTO.setStatus("System error occured. Please contact Administrator");
    	}
    	
    	return jobDTO;
    }
    
    public JobDTO updateFeedback(String jobId, String userName, String feedback){
    	JobDTO jobDTO = new JobDTO();
    	try{
    		jobsCollection.updateOne(new Document("_id", jobId).append("appliedJobs.userName", userName), new Document("$set", new Document("appliedJobs.$.canFeedback",feedback)));
    		jobDTO.setStatus("SUCCESS");
    	}catch(Exception e){
    		e.printStackTrace();
    		jobDTO.setStatus("System error occured. Please contact Administrator");
    	}
    	
    	return jobDTO;
    }

}
