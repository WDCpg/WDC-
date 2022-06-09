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

/* Google Login */
import gAuthPlugin from 'vue3-google-oauth2';
// need to install command before google sign in will work
//npm i vue3-google-oauth2

/* APP ARCHITECTURE */
const app = createApp(App);

let gauthClientId = "768834812579-ivi0oopbkqe05cg6t41p83t7gteekut6.apps.googleusercontent.com";

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

// google signin
app.use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent'});

// Mount app on HTML
app.mount("#app");

