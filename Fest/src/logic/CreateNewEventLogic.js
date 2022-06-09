import store from "@/store/index";

export default {
    data () {
        return {
            search: '',
            showFriends: false,
            invitedFriends: [],
            inviteActived: false,
            inviteCount: [],
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

        inviteFriend(friend,index) {
            //store.dispatch('inviteFriend', friend);
            friend['status'] = true;
            this.invitedFriends.push(friend);
            this.inviteCount.push(index);
        },
        inviteSent(index) {
            if (this.inviteCount[index] == index) {
                    this.inviteActived = !this.inviteActived;
                return this.inviteActived;
            }
        },

        cancelInvited(invitedFriends, index) {
            invitedFriends.splice(index, 1);
            this.invit
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
            let friends = store.state.friendInfo;
            for (let i = 0; friends.length; i++) {
                friends[i]['inviteActive'] = false;
            }
            return store.state.friendInfo;
        }
    },

    created() {
        store.dispatch('fetchNewEventDefault');
    }
}