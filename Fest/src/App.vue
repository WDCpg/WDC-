<script setup>
import { RouterLink, RouterView } from "vue-router";

import Navigation from "@/components/Navigation.vue"
import SideNavigation from "@/components/SideNavigation.vue"
import Login from "@/components/Login.vue"

</script>

<template>

  <Navigation />
  <main>
    <SideNavigation />
    <div class="page-container">
      <div class="page-line">
          <hr>
      </div>

      <div class="page-content-container">
        <RouterView />
      </div>
    </div>

  </main>
  <footer>
  </footer>
  <div class="bg-modal">
    <div class = "login">
      <Login/>
    </div>
  </div>

</template>

<style>
@import "@/styles/base.css";
@import "@/styles/LoginStyles.css";
main {
  display: flex;
  flex-direction: row;
}
</style>

