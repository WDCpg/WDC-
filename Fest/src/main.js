import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* Components */
import Navigation from "./components/Navigation.vue";
import SideNavigation from "./components/SideNavigation.vue";
import Dashboard from "./components/Dashboard.vue";
import UserProfile from "./components/UserProfile.vue";
import NewEvent from "./components/NewEvent.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";

/* APP ARCHITECTURE */
const app = createApp(App);

import gAuthPlugin from 'vue3-google-oauth2';
let gauthClientId = '676785461988-icoil0dtlld2fcp5kb22llst7t94mans.apps.googleusercontent.com';
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
})



// Router
app.use(router);

// Store - State Management
app.use(store);

// Set Components
app.component("Navigation", Navigation);
app.component("SideNavigation", SideNavigation);
app.component("Dashboard", Dashboard);
app.component("UserProfile", UserProfile);
app.component("NewEvent", NewEvent);
app.component("SignUp", SignUp);
app.component("Login", Login);

// Mount app on HTML
app.mount("#app");

