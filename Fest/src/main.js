import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"
import Navigation from "./components/Navigation.vue"
import Dashboard from "./components/Dashboard.vue"

const app = createApp(App);

app.use(router);
app.use(store);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Navigation", Navigation);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Dashboard", Dashboard)

app.mount("#app");
