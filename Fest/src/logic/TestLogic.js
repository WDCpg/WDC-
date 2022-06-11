
export default {
    mounted() {
      gapi.signin2.render('google-signin-button', {
        onsuccess: this.onSignIn
      })
    },
    methods: {
      onSignIn (user) {
        const profile = user.getBasicProfile()
        console.log(profile)
      }
    }
  }