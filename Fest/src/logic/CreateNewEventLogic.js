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
        formatDate(dateString) {
            if (dateString == null) {
                return;
            }
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date) + " " + date.toLocaleTimeString(('en-US'), { hour: '2-digit', minute: '2-digit' });
        },

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
            //store.dispatch('postFriendInvited');
        },

        inviteFriend(friend,index) {
            friend['status'] = true;
            friend.inviteActive = !friend.inviteActive;
            this.invitedFriends.push(friend);
            this.inviteCount.push(index);
            store.dispatch('InviteList', this.invitedFriends);
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
            store.dispatch('InviteList', invitedFriends);
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
        this.friendInfo = friends;
        //console.log('this friend', this.friendInfo)
    }
}