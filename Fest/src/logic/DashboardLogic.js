import store from "@/store/index";

export default {
    methods: {
        formatDate(dateString) {
            if (dateString == null) {
                return;
            }
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date) + " " + date.toLocaleTimeString(('en-US'), { hour: '2-digit', minute: '2-digit' });
        },
        
        formatLocation(event) {
            if (event.street === null) {
                return '';
            }
            else {
                return event.street + ", " + event.city;
            }
            
        }
    },
    computed: {
        publicEvents() {
            let publicEvents = store.state.publicEvents;
            for (let i = 0; i < publicEvents.length; i++) {
                if(publicEvents[i].event_title.length > 30) {
                    // If title string is too long remove characters
                    publicEvents[i].event_title = publicEvents[i].event_title.slice(0, 30) + '..'
                }
            }
            return publicEvents;
        },
        
        isLoading() {
            return store.state.isLoading;
        },

        userInfo() {
            return store.state.userInfo;
        }
    },

    created() {
        store.dispatch('updateIsLoading');
        // store.dispatch('loginOnOpen');
        store.dispatch('fetchPublicEvents')
            .then(() => store.dispatch('updateIsLoading'));
    }
}