import store from "@/store/index";
import api from "@/api/DashboardAPI";

export default {
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