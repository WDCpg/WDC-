import store from "@/store/index";

export default {
    getEventAttendants(eventId, eventAttendants) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return eventAttendants (JSON.parse(this.response));
            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getEventAttendants?event_id=${eventId}`, false);

        //Send request
        xhttp.send();
    },

    getEventDetails(eventId, eventDetails) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return eventDetails (JSON.parse(this.response));
            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getEventDetails?event_id=${eventId}`, false);

        //Send request
        xhttp.send();
    },

    getAttendantsCount(eventId, attendantsCount) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return attendantsCount (JSON.parse(this.response));
            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getAttendantsByStatus?event_id=${eventId}`, true);

        //Send request
        xhttp.send();
    }
}