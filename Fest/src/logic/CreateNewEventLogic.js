import store from "@/store/index";

export default {
    data () {
        return {
            search: ''
        }
    },

    methods: {
        cancelCreate() {
            store.dispatch('cancelCreate');
        },

        clearInput(type) {
            store.dispatch('clearInput', type);
        },

        submitNewEvent() {
            store.dispatch('postNewEvent');
        }
    },
    computed: {
        inviteFriend() {
            let search = this.search.toLowerCase();
            let friends = store.state.friendInfo;
            return friends.filter(friend => friend.firstName.toLowerCase().includes(search) ||
            friend.lastName.toLowerCase().includes(search));
        },

        userInfo() {
            return store.state.userInfo;
        },

        newEventData() {
            return store.state.newEventData;
        },

        friendInfo() {
            return store.state.friendInfo;
        }
    },

    created() {
        store.dispatch('fetchNewEventDefault');
    }
}