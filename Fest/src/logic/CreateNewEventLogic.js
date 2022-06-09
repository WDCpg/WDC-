import store from "@/store/index";

export default {
    data () {
        return {
            search: '',
            showFriends: false,
            invitedFriends: [],
        }
    },

    methods: {
        cancelCreate() {
            location.replace("/");
            //store.dispatch('cancelCreate');
        },

        clearInput(type) {
            store.dispatch('clearInput', type);
        },

        submitNewEvent() {
            store.dispatch('postNewEvent');
        },

        inviteFriend(friend) {
            //store.dispatch('inviteFriend', friend);
            friend['status'] = true;
            this.invitedFriends.push(friend);
        },

        // inviteSent(invitedFriends) {
        //     for (let x in invitedFriends) {
        //         if (x.status == true) {
        //             return true;
        //         }
        //     }
        // },

        cancelInvited(invitedFriends, index) {
            invitedFriends.splice(index, 1);
            console.log(invitedFriends);
        }
    },

    computed: {
        findFriend() {
            let search = this.search.toLowerCase();
            let friends = store.state.friendInfo;
            return friends.filter(friend =>
                friend.firstName.toLowerCase().includes(search)
                || friend.lastName.toLowerCase().includes(search));
        },

        // invitedFriends() {
        //     return store.getters.invitedFriends;
        // },

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