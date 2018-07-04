
export const hackathonsService = {
    getAll
};

function getAll() {
    const requestOptions = {
        method: 'GET'
        
    };

    return fetch("http://localhost:4000/allHacks", requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log("hackathon data ::" + JSON.stringify(response));
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
               location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}