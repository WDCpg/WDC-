
<template>
  <div id="google-signin-button"></div>
  <button @click="signOut">Sign Out</button>
  googleData

</template>

<script>
export default {
  mounted() {
    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
  },
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

</script>

<script src="@/logic/ProfileLogic.js"></script>