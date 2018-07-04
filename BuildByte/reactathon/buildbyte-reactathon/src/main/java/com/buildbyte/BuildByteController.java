package com.buildbyte;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.buildbyte.dao.JobsDAO;
import com.buildbyte.dao.UserDAO;
import com.buildbyte.dto.AppliedJobDetailsDTO;
import com.buildbyte.dto.JobDTO;
import com.buildbyte.dto.JobDetailsDTO;
import com.buildbyte.dto.UserRequestDTO;
import com.buildbyte.dto.UserResponseDTO;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

@RestController
public class BuildByteController {
	private final UserDAO userDAO;
	private final JobsDAO jobsDAO;
	
	public BuildByteController() {
		final MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost"));
        final MongoDatabase mongoDatabase = mongoClient.getDatabase("vzcareer");
        userDAO = new UserDAO(mongoDatabase);
        jobsDAO = new JobsDAO(mongoDatabase);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/reactathon/vzcareer/adduser")
	@ResponseBody
	UserResponseDTO addUser(@RequestBody UserRequestDTO userRequest) {
      return userDAO.addUser(userRequest);
    }
	
	@RequestMapping(method = RequestMethod.POST, value="/reactathon/vzcareer/login")
	@ResponseBody
	UserResponseDTO login(@RequestBody UserRequestDTO userRequest) {
      return userDAO.validateLogin(userRequest);
    }
	
	@RequestMapping("/reactathon/vzcareer/jobdetails")
    JobDTO hello() {
       return jobsDAO.getJobDetails();
    }
	
	@RequestMapping(method = RequestMethod.POST, value="/reactathon/vzcareer/appliedJobs")
	@ResponseBody
	JobDTO getAppliedJobs(@RequestBody UserRequestDTO userRequest) {
      return jobsDAO.getAppliedJobsDetails(userRequest);
    }
	
	@RequestMapping(method = RequestMethod.POST, value="/reactathon/vzcareer/applyJob")
	@ResponseBody
	JobDTO applyJob(@RequestBody AppliedJobDetailsDTO jobDetailsRequest) {
		String email = userDAO.getUserEmail(jobDetailsRequest.getUserName());
		jobDetailsRequest.setUserEmail(email);
		return jobsDAO.insertAppliedJobDetails(jobDetailsRequest);
    }
	
	@RequestMapping(method = RequestMethod.POST, value="/reactathon/vzcareer/updateFeedback")
	@ResponseBody
	JobDTO updateFeedback(@RequestBody AppliedJobDetailsDTO jobDetailsRequest) {
		return jobsDAO.updateFeedback(jobDetailsRequest.getJobId(), jobDetailsRequest.getUserName(), jobDetailsRequest.getCanFeedback());
    }
	
	/*private JobDTO getJobDetails(){
		List<JobDetailsDTO> jobDetails = new ArrayList<JobDetailsDTO>();
		JobDetailsDTO dto = new JobDetailsDTO();
		dto.setJobId("400001");
		dto.setDesc("This is for job 400001");
		dto.setApplyBefore("2018-08-01");
		dto.setHiringManager("Praveen");
		dto.setHmEmail("praveen.seripalli@verizon.com");
		dto.setJobLocation("Hyderabad");
		dto.setPostingDate("2018-07-02");
		dto.setTitle("Consultant");
		
		jobDetails.add(dto);
		JobDTO parent = new JobDTO();
		parent.setJobDetails(jobDetails);
		return parent;
	}*/


}
