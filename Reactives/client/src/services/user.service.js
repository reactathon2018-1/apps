export const userService = {
    login,
    logout,
    register
};

function login(emailid, password) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch("http://localhost:4000/getUser?email_id="+emailid+"&password="+password, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function register(user) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch("http://localhost:4000/createUser?first_name="+user.firstName+"&last_name="+user.lastName+"&email_id="+user.emailid+"&password="+user.password+"&user_type=1", requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log('type of text : '+typeof(data))
        const data = text && JSON.parse(text);
        console.log("create data ::" + data);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}