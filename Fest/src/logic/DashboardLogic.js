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
            return store.state.publicEvents;
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
        store.dispatch('fetchPublicEvents')
            .then(() => store.dispatch('updateIsLoading'));
    }
}