//1) create template JSON from database

const userInfo = {
    "first_name": "Santiago",
    "last_name": "Carlos",
    "contact_number": '0446544654',
    "email": "adelaide@adelaied",
    "street": "123 aslkdm",
    "city": "adelaoide",
    "country": "australia",
    "post_code": 5000,
    "user_id": 12,
    "profile_picture": "1654505601342.png"
};

//2) create export api call / ajax function
export default {
    getUserInfo (events){
        events(userInfo);
    },

    postUserInfo (newUserData) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `https://chobbiwan-code50-16236897-vgqjwwq6fx9g5-8080.githubpreview.dev/updateUserData`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        xhttp.send(JSON.stringify(newUserData));

    },

    postUserPassword(newUserPassword) {
        console.log(newUserPassword);
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `https://chobbiwan-code50-16236897-vgqjwwq6fx9g5-8080.githubpreview.dev/UpdatePassword`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        xhttp.send(JSON.stringify(newUserPassword));

    }
}


