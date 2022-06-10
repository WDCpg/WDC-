
<template>
  <div id="google-signin-button"></div>
  <button @click="signOut">Sign Out</button>
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
    },

    signOut() {
            gapi.auth2.getAuthInstance().signOut().then((function() {
              console.log('User signed out')
            }))
          }
  }
}
</script>