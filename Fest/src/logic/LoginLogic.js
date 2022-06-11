import store from "@/store/index";

export default {
    mounted() {
        gapi.signin2.render('google-signin-button', {
          onsuccess: this.onSignIn
        })
      },

    methods: {
        // GOOGLE
        onSignIn (user) {
        const profile = user.getBasicProfile();
        const id_token = user.getAuthResponse().id_token;
        console.log(profile)
        console.log(id_token)
        store.dispatch('postGoogleLogin', [id_token, profile]);
        },

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
            
        }
    }
    
}