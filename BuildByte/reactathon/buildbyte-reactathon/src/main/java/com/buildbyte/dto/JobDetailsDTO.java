package com.buildbyte.dto;

public class JobDetailsDTO {
	
	private String jobId;
	private String title;
	private String desc;
	private String jobLocation;
	private String postingDate;
	private String applyBefore;
	private String hiringManager;
	private String hmEmail;


	public JobDetailsDTO() {
		
	}


	/**
	 * @return the jobId
	 */
	public String getJobId() {
		return jobId;
	}


	/**
	 * @param jobId the jobId to set
	 */
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}


	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}


	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}


	/**
	 * @return the desc
	 */
	public String getDesc() {
		return desc;
	}


	/**
	 * @param desc the desc to set
	 */
	public void setDesc(String desc) {
		this.desc = desc;
	}


	/**
	 * @return the jobLocation
	 */
	public String getJobLocation() {
		return jobLocation;
	}


	/**
	 * @param jobLocation the jobLocation to set
	 */
	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}


	/**
	 * @return the postingDate
	 */
	public String getPostingDate() {
		return postingDate;
	}


	/**
	 * @param postingDate the postingDate to set
	 */
	public void setPostingDate(String postingDate) {
		this.postingDate = postingDate;
	}


	/**
	 * @return the applyBefore
	 */
	public String getApplyBefore() {
		return applyBefore;
	}


	/**
	 * @param applyBefore the applyBefore to set
	 */
	public void setApplyBefore(String applyBefore) {
		this.applyBefore = applyBefore;
	}


	/**
	 * @return the hiringManager
	 */
	public String getHiringManager() {
		return hiringManager;
	}


	/**
	 * @param hiringManager the hiringManager to set
	 */
	public void setHiringManager(String hiringManager) {
		this.hiringManager = hiringManager;
	}


	/**
	 * @return the hmEmail
	 */
	public String getHmEmail() {
		return hmEmail;
	}


	/**
	 * @param hmEmail the hmEmail to set
	 */
	public void setHmEmail(String hmEmail) {
		this.hmEmail = hmEmail;
	}

}
