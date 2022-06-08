import store from "@/store/index";

export default {
    methods: {
        hideLoginModal() {
            document.querySelector(".bg-modal").style.display="none";
        },
        submitLogin() {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email != undefined && password != undefined) {
                var auth = {
                    "email": email,
                    "password": password
                }
                store.dispatch('submitLogin', auth);
            }
            else {
                return;
            }
        },
        onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token)
        }
    },
        signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
    }
}