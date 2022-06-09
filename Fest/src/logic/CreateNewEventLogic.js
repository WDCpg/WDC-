import store from "@/store/index";

export default {
    data () {
        return {
            search: '',
            showFriends: false,
            invitedFriends: [],
            inviteSent: false
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
            //console.log(this.invitedFriends);
            for (let x in this.invitedFriends) {
                if (x.status == true) {
                    this.inviteSent = true;
                }
            }
        },

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