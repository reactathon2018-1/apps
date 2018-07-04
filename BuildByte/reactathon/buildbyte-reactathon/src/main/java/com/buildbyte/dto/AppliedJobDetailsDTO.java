package com.buildbyte.dto;

public class AppliedJobDetailsDTO {
	
	private String jobId;
	public String getJobId() {
		return jobId;
	}



	public void setJobId(String jobId) {
		this.jobId = jobId;
	}



	private String userName;
	private String userEmail;
	private String appliedDate;
	private String interviewType;
	private String interviewDate;
	private String interviewLocation;
	private String jobStatus;
	private String hmFeedback;
	private String canFeedback;

	public AppliedJobDetailsDTO() {
		
	}

	

	/**
	 * @return the appliedDate
	 */
	public String getAppliedDate() {
		return appliedDate;
	}

	/**
	 * @param appliedDate the appliedDate to set
	 */
	public void setAppliedDate(String appliedDate) {
		this.appliedDate = appliedDate;
	}

	/**
	 * @return the interviewType
	 */
	public String getInterviewType() {
		return interviewType;
	}

	/**
	 * @param interviewType the interviewType to set
	 */
	public void setInterviewType(String interviewType) {
		this.interviewType = interviewType;
	}

	/**
	 * @return the interviewDate
	 */
	public String getInterviewDate() {
		return interviewDate;
	}

	/**
	 * @param interviewDate the interviewDate to set
	 */
	public void setInterviewDate(String interviewDate) {
		this.interviewDate = interviewDate;
	}

	/**
	 * @return the interviewLocation
	 */
	public String getInterviewLocation() {
		return interviewLocation;
	}

	/**
	 * @param interviewLocation the interviewLocation to set
	 */
	public void setInterviewLocation(String interviewLocation) {
		this.interviewLocation = interviewLocation;
	}

	/**
	 * @return the jobStatus
	 */
	public String getJobStatus() {
		return jobStatus;
	}

	/**
	 * @param jobStatus the jobStatus to set
	 */
	public void setJobStatus(String jobStatus) {
		this.jobStatus = jobStatus;
	}

	/**
	 * @return the hmFeedback
	 */
	public String getHmFeedback() {
		return hmFeedback;
	}

	/**
	 * @param hmFeedback the hmFeedback to set
	 */
	public void setHmFeedback(String hmFeedback) {
		this.hmFeedback = hmFeedback;
	}

	/**
	 * @return the canFeedback
	 */
	public String getCanFeedback() {
		return canFeedback;
	}

	/**
	 * @param canFeedback the canFeedback to set
	 */
	public void setCanFeedback(String canFeedback) {
		this.canFeedback = canFeedback;
	}



	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}



	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}



	/**
	 * @return the userEmail
	 */
	public String getUserEmail() {
		return userEmail;
	}



	/**
	 * @param userEmail the userEmail to set
	 */
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

}
