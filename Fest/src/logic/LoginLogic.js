import store from "@/store/index";

export default {
    mounted() {
        gapi.signin2.render('google-signin-button', {
          onsuccess: this.onSignIn
        })
    },
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
        onSignIn (user) {
            var profile = user.getBasicProfile()
            //var myuser = user
            var id_token = user.getAuthResponse().id_token
            console.log(id_token)
            console.log(profile)
            //console.log(user)
            store.dispatch('postGoogleLogin', profile, id_token)

          },

          signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
                }))
          }
    }
}


