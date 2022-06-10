import store from "@/store/index";

export default {
    computed: {
        googleData(){
            return store.state.googleData;
        }
    methods: {
        onSignIn (user) {
            const profile = user.getBasicProfile()
            const myuser = user
            console.log(profile)
            console.log(myuser)
            store.dispatch('postGoogleData')
          },

          signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
                }))
              }
          }
    }
}


























