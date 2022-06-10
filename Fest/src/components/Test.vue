<template>
<div class="g-signin2" data-onsuccess="onSignIn()"></div>
<div id="content"></div>

</template>
<script>
  function onSignIn(googleUser) {
    console.log('WORKING');
    console.log('user is ' +JSON.stringify(googleUser.getBasicProfile()));
    document.querySelector
}

</script>

