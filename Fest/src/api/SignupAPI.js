export default {
    postSignupInfo (newSignupData) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `https://fulzske-code50-61676631-9pr7w7wq27rwr-8080.githubpreview.dev/signup`, true);
        //xhttp.open('POST', `*`, true);

        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request

        console.log(newSignupData);
        xhttp.send(JSON.stringify(newSignupData));
    }
}

