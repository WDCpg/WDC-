import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"
import Navigation from "./components/Navigation.vue"
import SideNavigation from "./components/SideNavigation.vue"
import Dashboard from "./components/Dashboard.vue"
import UserProfile from "./components/UserProfile.vue"

const app = createApp(App);

app.use(router);
app.use(store);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Navigation", Navigation);
app.component("SideNavigation", SideNavigation);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Dashboard", Dashboard);
app.component("UserProfile", UserProfile);


app.mount("#app");
