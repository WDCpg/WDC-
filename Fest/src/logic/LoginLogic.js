import store from "@/store/index";

export default {
    methods: {
        hideLoginModal() {
            store.dispatch('toggleLoginModal');
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
            console.log('User is' + JSON.stringify(googleUser.getBasicProfile()));
            console.log('ID: ' + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
          },

        signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
            }))
          }
    }

}