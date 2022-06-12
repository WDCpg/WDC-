import store from "@/store/index";
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
    components: { VueCal },
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
            var titleEmpty = true;
            var descriptionEmpty = true;
            let elements = document.getElementsByTagName('textarea');
            // Title
            if(elements[0].value != "Your event's title" && elements[0].value != "") {
                titleEmpty = false;
            }
            if (elements[1].value != "Your description" && elements[1].value != ""){
                descriptionEmpty = false;
            }
            if (titleEmpty === false && descriptionEmpty === false) {
                store.dispatch('postNewEvent');
                location.replace("/");
            }

            return;

        
            
            //store.dispatch('postFriendInvited');
        },

        inviteFriend(friend,index) {
            friend['status'] = true;
            friend.inviteActive = !friend.inviteActive;
            this.invitedFriends.push(friend);
            this.inviteCount.push(index);
            store.dispatch('InviteList', this.invitedFriends);
            store.dispatch('getFriendAvailablity', friend);

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
        },

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
        },

        friendAvailability(){
            console.log(store.state.invitedFriendsCalendar);
            return store.state.invitedFriendsCalendar;

        }


    },

    created() {
        
        store.dispatch('fetchNewEventDefault');
        var friends = JSON.parse(JSON.stringify(store.state.friendInfo));
        this.friendInfo = friends;
        //console.log('this friend', this.friendInfo)

    }
}