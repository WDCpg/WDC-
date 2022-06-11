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
      meta: {
        title: "Dashboard Fest"
      },
      component: DashboardView,
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        title: "Profile"
      },
      component: UserProfileView,
    },
    {
      path: "/newEvent",
      name: "newEvent",
      meta: {
        title: "New Event"
      },
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
      meta: {
        title: "Calendar - Fest"
      },
      component: CalendarView,
    },
    {
      path: "/admin",
      name:"admin",
      meta: {
        title: "Admin Fest"
      },
      component: AdminView,
    },
    {
      path: "/event/:event_id",
      name:"event",
      meta: {
        title: `Fest Event`
      },
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})


export default router;
