<template>
<div class="g-signin2" data-onsuccess="onSignIn()"></div>

</template>

<script>
  function onSignIn(googleUser) {
    console.log('user is ' +JSON.stringify(googleUser));
}

</script>
