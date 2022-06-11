import store from "@/store/index"


export default {
    mounted() {
        gapi.signin2.render('google-signin-button', {
          onsuccess: this.onSignIn
        })
      },

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
        },

        signOut() {
        gapi.auth2.getAuthInstance().signOut().then((function() {
            console.log('User signed out')
            }))
            store.dispatch('userSignOut');

            function get_cookie(name){
                return document.cookie.split(';').some(c => {
                    return c.trim().startsWith(name + '=');
                });
            }

            function delete_cookie( name, path, domain ) {
                if( get_cookie( name ) ) {
                  document.cookie = name + "=" +
                    ((path) ? ";path="+path:"")+
                    ((domain)?";domain="+domain:"") +
                    ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
                }
              }
            
            delete_cookie('session_id', '/', 'localhost');
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