export default {
    getPublicEvents (events) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
      
            return events (JSON.parse(this.response));

            
            }
        }
        //Open connection
        xhttp.open('GET', `http://localhost:8080/events/getPublicEvents`, false);

        //Send request
        xhttp.send();

        // setTimeout(() => events(publicEvents), 3000)
    }
}