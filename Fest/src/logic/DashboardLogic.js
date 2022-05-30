import store from "@/store/index";
import api from "@/api/DashboardAPI";

export default {
    methods: {
        formatDate(dateString) {
            if (dateString == null) {
                return;
            }
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
        }
    },
    computed: {
        publicEvents() {
            return store.state.publicEvents;
        },
        
        isLoading() {
            return store.state.isLoading;
        }
    },

    created() {
        store.dispatch('updateIsLoading');
        store.dispatch('fetchPublicEvents')
            .then(() => store.dispatch('updateIsLoading'));
    }
}