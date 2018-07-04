package com.buildbyte.dto;

import java.util.ArrayList;
import java.util.List;

public class JobDTO {
	
	private List<JobDetailsDTO> jobDetails = new ArrayList<JobDetailsDTO>();
	
	private List<AppliedJobDetailsDTO> appliedJobs = new ArrayList<AppliedJobDetailsDTO>();
	
	private String status;

	public JobDTO() {
		// TODO Auto-generated constructor stub
	}
	

	/**
	 * @return the jobDetails
	 */
	public List<JobDetailsDTO> getJobDetails() {
		return jobDetails;
	}

	/**
	 * @param jobDetails the jobDetails to set
	 */
	public void setJobDetails(List<JobDetailsDTO> jobDetails) {
		this.jobDetails = jobDetails;
	}


	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}


	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}


	/**
	 * @return the appliedJobs
	 */
	public List<AppliedJobDetailsDTO> getAppliedJobs() {
		return appliedJobs;
	}


	/**
	 * @param appliedJobs the appliedJobs to set
	 */
	public void setAppliedJobs(List<AppliedJobDetailsDTO> appliedJobs) {
		this.appliedJobs = appliedJobs;
	}


}
