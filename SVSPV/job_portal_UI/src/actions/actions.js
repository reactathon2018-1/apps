export const SUBMIT_FORM = "SUBMIT_FORM";
export const ENTRY_SUCCESS = "ENTRY_SUCCESS";

export function a_submitForm(c_id){
    return {
        type: SUBMIT_FORM,
        c_id
    }
}

export function a_entry_success(c_id,job_obj){
	return{
		type: ENTRY_SUCCESS,
		c_id,
		job_obj
	}
}