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

<<<<<<< HEAD
        //Open connection 8080 is for back end, 3000 is for front end
        xhttp.open('POST', `https://fulzske-code50-61676631-9pr7w7wq27rwr-8080.githubpreview.dev/login`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        xhttp.withCredentials = true;
=======
        //Open connection
        xhttp.open('POST', `http://localhost:8080/login`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

>>>>>>> fuleiNew2
        //Send request
        xhttp.send(JSON.stringify(auth));
    },
}