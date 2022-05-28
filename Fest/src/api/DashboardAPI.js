const publicEvents = [
    {
        "event_id": 1,
        "icon": 'U+1F600',
        "event_title": "Party at Adelaide Uni"
    },
    {
        "event_id": 1,
        "icon": 'U+1F1FF',
        "event_title": "Party at Adelaide Uni"
    }
]

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
        xhttp.open('GET', `http://localhost:3001/getUserEvents`, false);

        //Send request
        xhttp.send();

        // setTimeout(() => events(publicEvents), 3000)
    }
}