import store from "@/store/index"

export default {
    methods: {
        changeStyleMode() {
            // Update state
            store.dispatch('updatePageStyle');
        },

        displayLoginModal() {
            store.dispatch('toggleLoginModal');
        },

        displaySignUpModal() {
            store.dispatch('toggleSignUpModal');
        },

        toggleShowNotifications() {
            store.dispatch('toggleShowNotifications');
        }
    },
    computed: {
        userInfo() {
            return store.state.userInfo;
        },
        
        isDark() {
            return store.state.isDark;
        },

        showNotifications() {
            return store.state.showNotifications;
        },

        notifications() {
            let notifications = store.state.notifications;
            for (let i = 0; i < notifications.length; i++) {
                if(notifications[i].event_title.length > 30) {
                    // If title string is too long remove characters
                    notifications[i].event_title = notifications[i].event_title.slice(0, 30) + '..'
                }
            }
            return notifications;
         
        }
    }
}