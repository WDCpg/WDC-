export default {
    // First parameter has data, second returns status
    postLogin (auth, status) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return status(JSON.parse(this.response));
            }
            else if (this.readyState == 4)  {
                return status(this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `http://localhost:8080/login`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

        //Send request
        xhttp.send(JSON.stringify(auth));
    },

    googleTokenValidate() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://fulzske-code50-61676631-9pr7w7wq27rwr-8080.githubpreview.dev/googleToken');
        xhttp.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application');
        xhr.onload = function() {
            console.log('Signed in as: ' + xhr.responseText);
        };
        xhr.send('idtoken=' + id_token);
    }
}