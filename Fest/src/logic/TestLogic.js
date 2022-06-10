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
            var myuser = user
            console.log(profile)
            console.log(myuser)
            console.log(user.getAuthResponse())
            

          },

          signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
                }))
          }
    }
}


























