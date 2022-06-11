import store from "@/store/index";

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
        xhttp.open('GET', `${store.state.backEndUrl}/events/getPublicEvents`, false);

        //Send request
        xhttp.send();

        // setTimeout(() => events(publicEvents), 3000)
    }
}