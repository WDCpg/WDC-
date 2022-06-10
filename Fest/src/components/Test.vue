<template>
<div class="g-signin2" data-onsuccess="onSignIn()"></div>

<div id="content"></div>
<button onclick="signOut()">Sign out</button>

</template>
<script>

export default {
  methods: {
    onSignIn(googleUser) {
    console.log('WORKING');
    console.log('user is ' +JSON.stringify(googleUser.getBasicProfile()));
  },

  signOut() {
      gapi.auth2.getAuthInstance().signOut().then(function() {
        console.log("User signed out")
  })

}


</script>

