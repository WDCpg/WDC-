<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "@/components/Navigation.vue"
import SideNavigation from "@/components/SideNavigation.vue"
import Login from "@/components/Login.vue"
import store from "@/store/index";
import { computed } from 'vue';
const isDark = computed(() => store.getters.isDarkGetter);
const isLoginModal = computed(() => store.getters.isLoginModal);

// Check if user is logged in
const checkUser = () => {
  store.dispatch('loginOnOpen');
  console.log('Checking login');
  return;
}

checkUser();


</script>

<template>
  <div>
      <Navigation />
    <main :class="isDark ? 'dark' : 'light'">
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
    <div v-if="isLoginModal" class="bg-modal">
      <div class = "login">
        <Login/>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/styles/base.css";
@import "@/styles/LoginStyles.css";
main {
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 65px);
}

.ligth {
  background-color: #F6F5F7;
}

.dark {
  background-color: #1A1A1A;
}

.dark a {
  color: white;
}

.bg-modal {
  display: flex;
}

</style>

