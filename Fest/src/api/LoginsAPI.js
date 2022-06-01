export default {
    postLogin (auth) {
        console.log(auth.data)
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `http://localhost:3001/login`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        
        //Send request
        console.log(JSON.stringify(auth.data))
        xhttp.send(JSON.stringify(auth.data));
    }
}