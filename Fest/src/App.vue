<script setup>
import { RouterLink, RouterView } from "vue-router";

import Navigation from "@/components/Navigation.vue"
import SideNavigation from "@/components/SideNavigation.vue"
</script>

<template>
  <Navigation />
  <main>
    <SideNavigation />
    <RouterView />
  </main>
  <footer>
  </footer>
</template>

<style>
@import "@/styles/base.css";
main {
  display: flex;
  flex-direction: row;
}
</style>
