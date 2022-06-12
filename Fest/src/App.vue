<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "@/components/Navigation.vue"
import SideNavigation from "@/components/SideNavigation.vue"
import Login from "@/components/Login.vue"
import SignUp from "@/components/SignUp.vue"
import Register from "@/components/Register.vue"
import store from "@/store/index";

import { computed } from 'vue';
const isDark = computed(() => store.getters.isDarkGetter);
const isLoginModal = computed(() => store.getters.isLoginModal);
const isSignUpModal = computed(() => store.getters.isSignUpModal);
const isMobile = computed(() => {
  var viewportWidth = window.innerWidth;
  if (viewportWidth <= 500) {
    return true;
  }
  return false;
});

const isRegisterModal = computed(() => store.getters.isRegisterModal);

// Check if user is logged in
const checkUser = () => {
  store.dispatch('loginOnOpen');
  console.log('Checking login');
  return;
}

const baseUrl = (() => {
  store.dispatch('fetchBaseUrl');
  checkUser();
  return;
  });


console.log('WINDOW', window.innerWidth)
baseUrl();


</script>

<template>
  <div>
      <Navigation />
    <main :class="isDark ? 'dark' : 'light'">
      <div v-if="!isMobile">
        <SideNavigation />
      </div>
      
      <div class="page-container">
        <div class="page-line">
            <hr>
        </div>

        <div class="page-content-container">
          <RouterView />
        </div>
        
      </div>
      <div v-if="isMobile">
          <SideNavigation />
      </div>

    </main>
    <footer >
      
    </footer>
    <div v-if="isLoginModal" class="bg-modal">
      <div class = "login">
        <Login/>
      </div>
    </div>
    <div v-if="isSignUpModal" class="bg-modal">
      <SignUp/>
    </div>
    <div v-if="isRegisterModal" class="bg-modal">
      <Register/>
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

/* Scroll bar */
.page-content-container::-webkit-scrollbar {
    width: 5px;
  }

.page-content-container::-webkit-scrollbar-track {
background-color: none;
border-radius: 20px;
}

.page-content-container::-webkit-scrollbar-thumb {
background-color: #9A9A9A;
border-radius: 20px;
}

.dark .page-content-container::-webkit-scrollbar-thumb {
background-color: #C6C6C6;
border-radius: 20px;
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

@media (max-width: 500px) {
  
  main {
    flex-direction: column;
  }

  .page-container {
    width: 100%;
    max-height: calc(100vh - 135px);
  }

  .side-menu-container,
  .side-menu-container ul {
    height: 70px !important;
    width: 100% !important;
    flex-direction: row !important;
    justify-content: space-evenly !important;
    display: flex;
    align-items: center;
  }
}

</style>

