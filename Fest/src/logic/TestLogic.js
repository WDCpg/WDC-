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
            const profile = user.getBasicProfile()
            const myuser = user
            console.log(profile)
            console.log(myuser)
            console.log(user.getAuthResponse())
            store.dispatch("googleUserProfile"(myuser));
          },

          signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
                }))
          }
    }
}


























