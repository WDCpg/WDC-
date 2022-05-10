<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Navigation.vue"
</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style>

@import "@/assets/base.css";

#app {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

button {
  background: none;
  appearance: none;
  box-shadow: none;
  border: none;
  justify-content: center;
  display: flex;
}

</style>
