import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import NewEventView from "../views/NewEventView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CalendarView from "../views/CalendarView.vue";
import AdminView from "../views/AdminView.vue";
import EventView from "../views/EventView.vue";
import TestView from "../views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardView,
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfileView,
    },
    {
      path: "/newEvent",
      name: "newEvent",
      component: NewEventView,
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path:"/calendar",
      name: "calendar",
      component: CalendarView,
    },
    {
      path: "/admin",
      name:"admin",
      component: AdminView,
    },
    {
      path: "/event/:event_id",
      name:"event",
      component: EventView,
      props: true
    },
    {
      path: "/test",
      name:"test",
      component: TestView,
    },
  ],
});

export default router;
