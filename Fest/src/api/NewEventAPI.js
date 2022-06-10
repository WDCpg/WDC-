export default {
    postNewEvent(newEventData){
        console.log(newEventData)

        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `https://foolfish93-code50-99941624-97xg6q9xq3794w-8080.githubpreview.dev/newEvent`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        xhttp.send(JSON.stringify(newEventData));
    }

    // postFriendInvited(invitedFriends) {
    //     console.log(invitedFriends)
    //     let xhttp = new XMLHttpRequest();

    //     //Run on response
    //     xhttp.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200) {
    //         return this.response;
    //         }
    //     }
    //     //Open connection
    //     xhttp.open('POST', `https://foolfish93-code50-99941624-97xg6q9xq3794w-8080.githubpreview.dev/newEvent`, true);
    //     xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
    //     //Send request
    //     xhttp.send(JSON.stringify(invitedFriends));
    // }
}