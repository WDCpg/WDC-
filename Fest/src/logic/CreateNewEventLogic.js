import store from "@/store/index";

export default {
    methods: {
        clearInput(type) {
            store.dispatch('clearInput', type);
        },

        submitNewEvent() {
            store.dispatch('postNewEvent');
        }
    },
    computed: {
        userInfo() {
            return store.state.userInfo;
        },

        newEventData() {
            return store.state.newEventData
        }
    },

    created() {
        store.dispatch('fetchNewEventDefault');
    }
}