export default {
    // First parameter has data, second returns status
    postLogin (status) {
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
        xhttp.open('POST', `https://chobbiwan-code50-16236897-vgqjwwq6fx9g5-8080.githubpreview.dev/login`, true);
        // xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        //Send request
        xhttp.send(JSON.stringify({"email": "", "password": ""}));
    }
}