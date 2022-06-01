//1) create template JSON from database

const userInfo = {
    "first_name": "Santiago",
    "last_name": "Carlos",
    "contact_number": '0446544654',
    "email": "adelaide@adelaied",
    "street": "123 aslkdm",
    "city": "adelaoide",
    "country": "australia",
    "post_code": 5000
};

//2) create export api call / ajax function
export default {
    getUserInfo (newUserData) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `http://localhost:3001/updateUserData`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        xhttp.send(JSON.stringify(newUserData));

    }

    // postUseInfo (userInfo, body) {
    //     let xhttp = new XMLHttpRequest();

    //     //Run on response
    //     xhttp.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200) {
    //         console.log(JSON.parse(this.response))
    //         return userInfo (JSON.parse(this.response));
    //         }
    //     }

    //     //Open connection

    //     xhttp.open('POST', `http://localhost:3001/events/updateUserData`, false);
    //     xhttp.setRequestHeader('content-type', 'application/json; charset=UTF-8' );

    //     //Send request
    //     xhttp.send(JSON.stringify(body));

    //     // setTimeout(() => events(publicEvents), 3000)
    //     }
    }

//3) See Store/index.js -- create Action