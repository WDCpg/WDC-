<template>
<div class="g-signin2" data-onsuccess="onSignIn()"></div>

</template>

<script>

export default {
  methods: {
    onSignIn(hey) {
    console.log('WORKING');
    console.log('user is ' +JSON.stringify(googleUser.getBasicProfile()));
    }
  }
}

</script>

