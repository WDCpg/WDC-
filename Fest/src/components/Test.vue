<template>
<div class="g-signin2" data-onsuccess="onSignIn()"></div>

<div id="content"></div>
<button onclick="signOut()">Sign out</button>

</template>
<script>
  function onSignIn(googleUser) {
    console.log('WORKING');
    console.log('user is ' +JSON.stringify(googleUser.getBasicProfile()));

    function signOut() {
      gapi.auth2.getAuthInstance().signOut().then(function() {
        console.log("User signed out")
        })   
    }
}

</script>

