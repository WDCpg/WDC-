export default {
    // First parameter has data, second returns status
    getNotifications (user_id, notifications) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                return notifications(JSON.parse(this.response));
            }
            else if (this.readyState == 4)  {
                return notifications(this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `https://chobbiwan-code50-16236897-vgqjwwq6fx9g5-8080.githubpreview.dev/getNotifications`, true);
        xhttp.setRequestHeader('Content-type', 'application/json');

        let body = { "user_id": user_id}

        //Send request
        xhttp.send(JSON.stringify(body));
    }
}