

class employeeApi {


  static readEmployee(email) {
    const headers = Object.assign({
      'Content-Type': 'application/json'
    }, this.requestHeaders());
    const request = new Request(`http://10.74.23.21:9300/candidateInterviewDetails/`, {
      method: 'GET',
      headers: headers,
      body: JSON.stringify(email)
    });

    return fetch(request);
  }

  static updateEmployee(employee) {
    const headers = Object.assign({
      'Content-Type': 'application/json'
    }, this.requestHeaders());
    const request = new Request(`/api/employee/${employee._id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(employee)
    });

    return fetch(request);
  }

}

export default employeeApi;
