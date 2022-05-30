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
    getUserInfo (events) {
        events(userInfo) //ajax call
    }
}

//3) See Store/index.js -- create Action