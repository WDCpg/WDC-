import store from "@/store/index";

export default {
    data () {
        return {
            search: '',
            showFriends: false,
            invitedFriends: [],
            inviteActived: false,
            inviteCount: [],
            friendInfo: []
        }
    },

    methods: {
        postEmoji(emojiCode) {
            store.dispatch('newEventEmoji', emojiCode);
        },

        postPrivacy(privary) {
            store.dispatch('newEventPrivacy', privary);
        },

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
            friend['status'] = true;
            friend.inviteActive = !friend.inviteActive;
            this.invitedFriends.push(friend);
            this.inviteCount.push(index);
            store.dispatch('updateInviteFriend', friend);
        },
        inviteSent(index) {
            if (this.inviteCount[index] == index) {
                    this.inviteActived = !this.inviteActived;
                return this.inviteActived;
            }
        },

        cancelInvited(invitedFriends, friendInvited, index) {
            //console.log('invite', friendInvited);

            let friendIndex = this.friendInfo.findIndex(friend => friend.id === friendInvited.id);

            invitedFriends.splice(index, 1);
            this.friendInfo[friendIndex].inviteActive = false;
            console.log(invitedFriends);
        }
    },

    computed: {
        findFriend() {
            let search = this.search.toLowerCase();

            return this.friendInfo.filter(friend =>
                friend.firstName.toLowerCase().includes(search)
                || friend.lastName.toLowerCase().includes(search));
        },

        userInfo() {
            return store.state.userInfo;
        },

        newEventData() {
            return store.state.newEventData;
        }

    },

    created() {
        store.dispatch('fetchNewEventDefault');
        var friends = JSON.parse(JSON.stringify(store.state.friendInfo));
        // for (let i = 0; friends.length; i++) {
        //         friends[i]['inviteActive'] = false;
        //     }
        this.friendInfo = friends;
        //console.log('this friend', this.friendInfo)
    }
}