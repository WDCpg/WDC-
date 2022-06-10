import store from "@/store/index";

export default {
    mounted() {
        gapi.signin2.render('google-signin-button', {
          onsuccess: this.onSignIn
        })
    },
    // computed: {
    //     googleUserProfile(){
    //         return store.state.googleUserProfile;
    //     }
    // },
    methods: {
        onSignIn (user) {
            var profile = user.getBasicProfile()
            var id_token = user.getAuthResponse().id_token;
            //var myuser = user
            //console.log(profile);
            //console.log(id_token)
            console.log(user)

            //console.log(user)
            //store.dispatch('postGoogleLogin', profile, id_token);
          },

          signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
                }))
          }
    }
}


























