import store from "@/store/index";

export default {
    mounted() {
        gapi.signin2.render('google-signin-button', {
          onsuccess: this.onSignIn
        })
    },
    computed: {
        newSignupData(){
            return store.state.newSignupData;
            console.log(newSignupData);
        }
    },
    methods: {
        postNewSignupInfo() {
            const checkEmail = document.getElementById("email");
            const checkPassword = document.getElementById("password");
            if (checkPassword.value.length && checkEmail.value.length > 8) {
                console.log(checkEmail);
                console.log(checkPassword);
                store.dispatch('postSignupData');
            } else {
                if(!document.querySelector(".errorMessage")) {
                    let error = document.createElement("p");
                    error.innerText = "Requirements not met, please try again";
                    error.className="errorMessage";
                    error.style.color = "red";
                    document.querySelector(".signUpError").appendChild(error);
                }
            }
        },
        onSignIn (user) {
            var profile = user.getBasicProfile()
            var myuser = user
            console.log(profile);
            console.log(user)
            store.dispatch('postGoogleLogin', profile, user);
          },

          signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
                }))
          }
    }
}























