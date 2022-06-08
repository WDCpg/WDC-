import store from "@/store/index";

export default {
    computed: {
        newRegisterData(){
            return store.state.newRegisterData;
        }
    },
    methods: {
        postNewRegisterInfo() {
            const checkFirstname = document.getElementById("firstname");
            const checkLastname = document.getElementById("lastname");
            const checkDOB = document.getElementById("dateofbirth");
            const CheckStreetname = document.getElementById("streetname");
            const checkCity = document.getElementById("city");
            const checkCountry = document.getElementById("country");
            const checkPostcode = document.getElementById("postcode");

            if (checkFirstname.value && checkFirstname.value.length > 0 && checkLastname.value && checkLastname.value.length > 0 && checkDOB.value && checkDOB.value.length > 0 && CheckStreetname.value && CheckStreetname.value.length > 0 && checkCity.value && checkCity.value.length > 0 && checkCountry.value && checkCountry.value.length > 0 && checkPostcode.value && checkPostcode.value.length > 0) {
                store.dispatch('postRegisterData');
                this.$router.push('/');
            } else if (checkFirstname.value || checkFirstname.value.length <= 0 || checkLastname.value || checkLastname.value.length <= 0 || checkDOB.value || checkDOB.value.length <= 0 || CheckStreetname.value || CheckStreetname.value.length <= 0 || checkCity.value || checkCity.value.length <= 0 || checkCountry.value || checkCountry.value.length <= 0 || checkPostcode.value || checkPostcode.value.length > 0) {
                if(!document.querySelector(".errorMessage")) {
                    let error = document.createElement("p");
                    error.innerText = "Please enter all fields";
                    error.className="errorMessage";
                    error.style.color = "red";
                    document.querySelector(".post_code_country").appendChild(error);
                }
            }
        },
        loginGoogle() {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }
    }
}


// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

        // googleUser.getAuthResponse().id_token

        // let xhttp = new XMLHttpRequest();

        // //Run on response
        // xhttp.onreadystatechange = function() {
        //     if(this.readyState == 4 && this.status == 200) {
        //         return status(this.status);
        //     }
        //     else if (this.readyState == 4)  {
        //         return status([this.status, {test: 56}]);
        //     }
        // }

        // //Open connection
        // xhttp.open('POST', `http://localhost:8080/login`, true);
        // xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

        // //Send request
        // console.log(JSON.stringify(auth))
        // xhttp.send(JSON.stringify({token: googleUser.getAuthResponses().id_token}));
        // }

// must also npm install google-auth-library --save
// in order to validate an ID token in node js

// const{0Auth2Client} = require ('google-auth-library'); appears on top of /routes/index.js
// const client = new OAuth2Client('533508693712-b3eriebuf4c4h97aarn009ad5091o1a8.apps.googleusercontent.com');


//async function verify() {
//   const ticket = await client.verifyIdToken({
//       idToken: req.body.token,
//       audience: '533508693712-b3eriebuf4c4h97aarn009ad5091o1a8.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
// }
// verify().catch(console.error);

// followed guide and put in the google signin button and linked to developer account,
//we then go to server side, once login is successful we make ajax request we send login token itself to the serverside
// once we receive the login token, we validate the login token and use that the login the user based on common information about user, IE email, no need for a passsword


























