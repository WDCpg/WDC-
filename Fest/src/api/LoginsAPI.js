export default {
    // First parameter has data, second returns status
    postLogin (auth, status) {
        console.log(auth)
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return status(this.status);
            }
            else if (this.readyState == 4)  {
                return status([this.status, {test: 56}]);
            }
        }

        //Open connection
        xhttp.open('POST', `https://fulzske-code50-61676631-9pr7w7wq27rwr-3000.githubpreview.dev/login`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        //Send request
        console.log(JSON.stringify(auth))
        xhttp.send(JSON.stringify(auth));
    },

    googleLogin (token, status) {
        console.log(auth)
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return status(this.status);
            }
            else if (this.readyState == 4)  {
                return status([this.status, {test: 56}]);
            }
        }

        xhttp.open('POST', `http://localhost:8080/login`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        //Send request
        console.log(JSON.stringify(token))
        xhttp.send(JSON.stringify({token: googleUser.getAuthResponse().id_token}));
    }
}