import { createStore, storeKey } from "vuex";
import router from "../router/index";
import api from "@/api/DashboardAPI";
import userInfoApi from "@/api/UserProfileAPI";
import NewEventAPI from "../api/NewEventAPI";
import LoginsAPI from "../api/LoginsAPI";
import RefreshLoginAPI from "../api/RefreshLoginAPI";
import CalendarAPI from "../api/CalendarAPI";
import NotificationsAPI from "../api/NotificationsAPI";
import AdminAPI from "../api/AdminAPI";

import EventDataAPI from "../api/EventDataAPI";
import SignUpAPI from "../api/SignUpAPI";

export default createStore({
    // State == Data
    state: {
        isError: false,
        isLoading: false,
        isDark: false,
        isTitleChanged: false,
        isDescriptionChanged: false,
        loginModal: false,
        signUpModal: false,
        showNotifications: false,
        // Base URL
        backEndUrl: '',
        //userInfo template JSON
        userInfo: {

            // "first_name": "Santiago"
        },
        //get user availability
        userAvailability:  [
        ],

        userEvents: [
            {
                "event_id": 1,
                "event_title": "Hello my event",
                "event_description": "Description of my event goes here",
                "event_start": "14-06-2022T0:600",
                "event_end": "21-07-2022T0:800",

                "icon": "&#128047;",
                "image": "path/image.jpg "
            }
        ],
        notifications: [

        ],
        userCalendar: [

        ],
        publicEvents: [

        ],
        invitationEvents: [

        ],
        attendanceEvents: [

        ],
        // Bind to the input when creating a new element
        newEventData: {

        },

        //update user's profile information
        newUserData: {

        },
        //new password
        newUserPassword: {
        },

        friendInfo: [
            {id:1, firstName:'Mark', lastName:'Leo', icon:'P1.jpeg'},
            {id:2, firstName:'Carlos ', lastName:'Liu', icon:'P2.jpeg'},
            {id:3, firstName:'Alex', lastName:'G', icon:'P3.jpeg'},
            {id:4, firstName:'Monkey', lastName:'D', icon:'P4.jpeg'}
        ],

        allUsers: [

        ],

        allEvents:[

        ],

        allAdmins: [

        ],

        siteStatistics:[
        ]
        // EVENT PAGE
        eventAttendants: [

        ],

        eventAttendantsCount: [

        ],

        eventDetails: [
            ],

        invitedFriends: [

        ]
    },



    // Getters == Computed properties
    getters: {
        isDarkGetter(state) {
            return state.isDark;
        },

        isLoginModal(state) {
            return state.loginModal;
        },

        isSignUpModal(state) {
            return state.signUpModal;
        },

        getImages(state){
            return state.userInfo.profile_picture;
        },

        // invitedFriends(state) {
        //     if (state.invitedFriends.length > 0) {
        //         return state.invitedFriends.filter(friend => friend.status == true);
        //     }
        //     else {
        //         return state.invitedFriends;
        //     }
        // }
        userId(state) {
            return state.userInfo.user_id;
        }
    },

    // Actions == Methods
        //API calls go here.
        // Actions never update the state
    actions: {
        // Get Base URL
        fetchBaseUrl({commit}) {
            var baseUrl = window.location.origin;
            commit('setBaseUrl', baseUrl);
        },

        // Google Login
        postGoogleLogin({commit, dispatch}, id_token) {
            return new Promise((resolve, reject) => {
                LoginsAPI.googlePostLogin(id_token, status => {
                    // Forbidden wrong email or password
                    if (status.status == 200) {
                        // Commit user info to state
                        commit('setUserInfo', status.rows[0]);
                        commit('updateLoginModal');

                        // Notifications call
                        dispatch('fetchNotifications', status.rows[0].user_id);

                        console.log('Login successful');
                        // router.push({ name: '/' });

                    }
                    else if (status == 403) {
                        console.log(status)
                        console.log('Bad login');
                    }
                    else {
                        console.log(status)
                        console.log('Error');
                    }
                    resolve();
                });
            })
        },

        postGoogleSignUp({commit, dispatch}, [id_token, profile]) {
            console.log('ACTION', id_token, profile)
            return new Promise((resolve, reject) => {
                SignUpAPI.googleSignUp(id_token, profile, status => {

                    // Forbidden wrong email or password
                    if (status.status == 200) {
                        // Commit user info to state
                        commit('setUserInfo', status.rows[0]);
                        commit('updateSignUpModal');

                        // Notifications call
                        dispatch('fetchNotifications', status.rows[0].user_id);

                        console.log('Login successful');
                        // router.push({ name: '/' });

                    }
                    else if (status == 403) {
                        console.log(status)
                        console.log('Bad login');
                    }
                    else {
                        console.log(status)
                        console.log('Error');
                    }
                    resolve();
                });
            })
        },

        // Retrieve all data when opening Events page
        fetchEventData({dispatch}, eventId) {
            dispatch('fetchAttendantsCount', eventId);
            dispatch('fetchEventDetails', eventId);
            dispatch('fetchEventAttendants', eventId);
        },

        fetchAttendantsCount({commit}, eventId) {
            return new Promise((resolve, reject) => {
                EventDataAPI.getAttendantsCount(eventId, attendantsCount => {
                    commit('setAttendantsCount', attendantsCount.rows);
                    console.log(attendantsCount)
                    resolve();
                })
            })
        },

        fetchEventDetails({commit, dispatch}, eventId) {
            return new Promise((resolve, reject) => {
                EventDataAPI.getEventDetails(eventId, eventDetails => {
                    commit('setEventDetails', eventDetails.rows);
                    resolve();
                })
            })
        },

        fetchEventAttendants({commit}, eventId) {
            return new Promise((resolve, reject) => {
                EventDataAPI.getEventAttendants(eventId, eventAttendants => {
                    commit('setEventAttendants', eventAttendants.rows);
                    resolve();
                })
            })
        },

        newEventEmoji({commit}, emojiCode) {
            commit('updateNewEventEmoji', emojiCode);
        },

        newEventPrivacy({commit},privacy) {
            commit('updateNewEventPrivacy',privacy);
        },

        InviteList({commit}, invitedFriends) {
            commit('updateInviteList', invitedFriends);
        },

        // Update Show Notifications
        toggleShowNotifications({commit}) {
            commit('updateShowNotifications');
        },

        // Update Login Modal
        toggleLoginModal({commit}) {
            commit('updateLoginModal');
        },

        // Update Sign up modal
        toggleSignUpModal({commit}) {
            commit('updateSignUpModal');
        },

        // Post New Event
        postNewEvent() {
            NewEventAPI.postNewEvent(this.state.newEventData);
        },
        // Post Frient Invited
        // postFriendInvited() {
        //     NewEventAPI.postFriendInvited(this.state.invitedFriends);
        // },

        //update user's password
        postNewUserPassword(){
            userInfoApi.postUserPassword(this.state.newUserPassword);
        },

        //update user's profile information
        postNewUserData(){
            userInfoApi.postUserInfo(this.state.newUserData);
        },


        fetchPublicEvents({commit}) {
            return new Promise((resolve, reject) => {
                api.getPublicEvents(events => {
                    commit('setPublicEvents', events);
                    resolve();
                })
            })
        },
        //--CALENDAR ACTIONS--//
        fetchUserAvailability({commit}) {
            return new Promise((resolve, reject) => {
                CalendarAPI.getUserAvailability1(events => {
                    commit('setUserAvailability', events);
                    commit('updateDatetimeCalendar');
                    resolve();
                })
            })
        },

        // saveUserCalendar({commit}, calendarEvents){

        //     for(let i = 0; i<calendarEvents.length; i++){
        //         console.log(calendarEvents[i].start);
        //         CalendarAPI.postUserCalendar(calendarEvents[i]);
        //         commit('setUserCalendar', calendarEvents[i]);
        //     }
        // },

        saveUserCalendar({commit}, calendarEvents){
            console.log('CALENDAR POST', calendarEvents)
            for(let i = 0; i < calendarEvents.length; i++){
                // console.log(calendarEvents[i].start);
                var startDate = new Date(calendarEvents[i].start);
                var endDate = new Date(calendarEvents[i].end);
                calendarEvents[i].start = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate() + " " + startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds();
                calendarEvents[i].end = startDate.getFullYear() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate() + " " + endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds();
                CalendarAPI.postUserCalendar(calendarEvents[i]);
                // commit('setUserCalendar', calendarEvents[i]);
            }

        },

        //---ADMIN ACTION---//
        loadAdminPage({dispatch}) {
            dispatch('fetchAllUsers');
            dispatch('fetchAllEvents');
            dispatch('fetchAllAdmins');
        },

        fetchAllUsers({commit}){
            return new Promise((resolve, reject) => {
                AdminAPI.getAllUsers(events => {
                    commit('setAllUsers', events);
                    resolve();
                })
            })
        },

        adminDeleteUser({commit}, user_id){
            for(let i = 0; i<user_id.length; i++){
                AdminAPI.deleteUser(user_id[i]);
                commit('updateEvents', user_id);
            }
        },

        fetchAllEvents({commit}){
            return new Promise((resolve, reject) => {
                AdminAPI.getAllEvents(events => {
                    commit('setAllEvents', events);
                    console.log('EVENTS', events);
                    resolve();
                })
            })
        },

        adminDeleteEvent({commit}, event_id){
            for(let i = 0; i<event_id.length; i++){
                AdminAPI.deleteUserEvents(event_id[i]);
                commit('updateEvents', event_id);
            }
        },

        fetchAllAdmins({commit}){
            return new Promise((resolve, reject) => {
                AdminAPI.getAllAdmins(events => {
                    commit('setAllAdmins', events);
                    resolve();
                })
            })
        },

        adminDeleteAdmin({commit}, user_id){
            for(let i = 0; i<user_id.length; i++){
                AdminAPI.deleteAdmin(user_id[i]);
                commit('updateAdmins', user_id);
            }
        },

        postNewUserInfo({commit}, user_data){
            AdminAPI.adminPostUserInfo(user_data);
            commit('adminUpdateUser', user_data);
        },

        fetchSiteStatistics({commit}){
            return new Promise((resolve, reject) => {
                AdminAPI.getStatistics(events => {
                    commit('setSiteStatistics', events);
                    resolve();
                })
            })
        },

        /*--------------------*/

        updateIsLoading({commit}) {
            commit('isLoading');
        },

        fetchUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                userInfoApi.getUserInfo(data => {
                    commit('setUserInfo', data);
                    resolve();
                })
            })
        },

        fetchNewEventDefault({commit}) {
            let newEventDefault = {
                "title": "Your event's title",
                "description": "Your description",
                "event_start" : "2022-06-09T23:41",
                "event_end": "2022-06-09T23:41",
                "country": "Australia",
                "state": "South Australia",
                "city": "Adelaide",
                "street": "1 KingWilliam St",
                "post_code": "5000",
                "icon": "U+1F389",
                "privacy" : "Public"
            }
            commit('setNewEventDefault', newEventDefault);
        },

        clearInput({commit}, type) {
            let clear = '';

            commit('setNewEventNone', [clear, type]);
        },


        // Login
        submitLogin({commit, dispatch}, auth) {
            return new Promise((resolve, reject) => {
                LoginsAPI.postLogin(auth, status => {
                    // Forbidden wrong email or password
                    if (status.status == 200) {
                        // Commit user info to state
                        commit('setUserInfo', status.rows[0]);
                        commit('updateLoginModal');

                        // Notifications call
                        dispatch('fetchNotifications', status.rows[0].user_id);

                        console.log('Login successful');
                        // router.push({ name: '/' });

                    }
                    else if (status == 403) {
                        console.log(status)
                        console.log('Bad login');
                    }
                    else {
                        console.log('Error');
                    }
                    resolve();
                });
            })
        },

        // Fetch User Notifications
        fetchNotifications({commit}, user_id) {
            return new Promise((resolve, reject) => {
                NotificationsAPI.getNotifications(user_id, notifications => {
                    if (notifications.status == 200) {
                        commit('updateNotifications', notifications.rows);
                        commit('updateIconCode', "notifications");
                    }
                    else {
                        console.log('error');
                    }
                })
            })
        },

        // Change page style - Light / Dark
        updatePageStyle({commit}) {
            commit('togglePageStyle');
        },

        loginOnOpen({commit, dispatch}) {
            return new Promise((resolve, reject) => {
                RefreshLoginAPI.postLogin(status => {
                    // Forbidden wrong email or password
                    if (status.status == 200) {
                        // Commit user info to state

                        // Notifications call
                        dispatch('fetchNotifications', status.rows[0].user_id);

                        console.log(status.rows)
                        commit('setUserInfo', status.rows);
                        console.log('Login successful');
                        // router.push({ name: 'login' });
                        return;
                    }
                    else if (status.status == 403) {
                        console.log(status)
                        console.log('Bad login');
                    }
                    else {
                        console.log('Error');
                    }
                    resolve();
                });
            })
        },

        // Change page style - Light / Dark
        updatePageStyle({commit}) {
            commit('togglePageStyle');


            commit('setNewEventNone', [clear, type]);
        },


            // commit('setNewEventNone', [clear, type]);


        inviteFriend() {
            let search = '';
            return this.friendInfo.filter((friend) =>{
                friend.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
                friend.lastName.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },

    // Setting and updating the state.
    // Mutations only set or update the state.
    mutations: {
        setBaseUrl(state, baseUrl) {
            try {
                let url = baseUrl.replace("3000", "8080");
                state.backEndUrl = url;
                return;
            }
            catch {
                console.log('WRONG FRONT-END URL, MUST BE RUNNING ON PORT 3000');
                return;
            }


        },

        setAttendantsCount(state, attendantsCount) {
            state.eventAttendantsCount = attendantsCount;
        },

        setEventDetails(state, eventDetails) {
            state.eventDetails = eventDetails;
            console.log('Details', state.eventDetails)
            this.commit('updateIconCode', "eventDetails");
            return;
        },

        // Event Attendants
        setEventAttendants(state, eventAttendants) {
            state.eventAttendants = eventAttendants;
            return;
        },
        // Invite Friend
        // updateFriendsInvited(state, friend) {
        //     friend['status'] = true;
        //     state.invitedFriends.push(friend);
        // },
        updateNewEventEmoji(state, emojiCode) {
            state.newEventData['icon'] = emojiCode;
        },

        updateNewEventPrivacy(state,privacy) {
            state.newEventData.privacy = privacy;
        },

        updateInviteList(state, invitedFriends) {
            state.invitedFriends = invitedFriends;
        },

        // Update Show Notifications
        updateShowNotifications(state) {
            state.showNotifications = !state.showNotifications;
        },

        // Update Notifications
        updateNotifications(state, notifications) {
            state.notifications = notifications;
        },

        // Update Login Modal
        updateLoginModal(state) {
            state.loginModal = !state.loginModal;
        },

        // Update Sign Up Modal
        updateSignUpModal(state) {
            state.signUpModal = !state.signUpModal;
        },

        // Change page style - Light / Dark
        togglePageStyle(state) {
            state.isDark = !state.isDark;
            console.log(state.isDark)
        },

        isLoading(state) {
            state.isLoading = !state.isLoading;
        },

        setNewEventDefault(state, newEventDefault) {
            state.newEventData = newEventDefault;
        },

        setNewEventNone(state, [data, type]) {
            if (type === "title" && !state.isTitleChanged) {
                state.newEventData.title = data;
                state.isTitleChanged = true;
            }
            else if (type === "description" && !state.isDescriptionChanged) {
                state.newEventData.description = data;
                state.isDescriptionChanged = true;
            }
            else {
                return;
            }

        },


        updateIconCode(state, stateElement) {
            for (let i = 0; i < state[stateElement].length; i++) {
                let rawCode = state[stateElement][i].icon.replace("U+", "0x");
                let decoded = String.fromCodePoint(rawCode);
                state[stateElement][i].icon = decoded;
            }
        },

        setPublicEvents(state, publicEvents) {
            state.publicEvents = publicEvents;
            this.commit('updateIconCode', "publicEvents");
        },

        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },

        setUserAvailability (state, userAvailability){
            state.userAvailability=userAvailability;
        },

        updateDatetimeCalendar(state) {
            for(let i = 0; i<state.userAvailability.length;i++){
                state.userAvailability[i].start = new Date(state.userAvailability[i].start);
                state.userAvailability[i].end = new Date(state.userAvailability[i].end);
            }
        },

        setUserCalendar(state, calendarEvents){
            state.userAvailability.push(calendarEvents);
        },

        //-----ADMIN MUTATOR-----//
        setAllUsers(state, allUsers ){
            state.allUsers=allUsers;
            console.log(state.allUsers);
        },

        setAllEvents(state, allEvents){
            state.allEvents = allEvents;
            console.log(state.allEvents);
        },

        setAllAdmins(state, allAdmins){
            state.allAdmins=allAdmins;
            console.log(state.allAdmins);
        },

        updateEvents(state, event_id){
            for (let i = 0; i<state.allEvents.length; i++){
                if(state.allEvents[i].event_id == event_id)
                    state.allEvents.splice(i,1);
            }
            console.log(state.allEvents);
        },

        updateUsers(state, user_id){
            for (let i = 0; i<state.allUsers.length; i++){
                if(state.allUsers[i].user_id == user_id)
                    state.allUsers.splice(i,1);
            }
            console.log(state.allUsers);
        },

        updateAdmins(state, user_id){
            for (let i = 0; i<state.allAdmins.length; i++){
                if(state.allAdmins[i].user_id == user_id)
                    state.allAdmins.splice(i,1);
            }
            console.log(state.allAdmins);
        },

        adminUpdateUser(state, user){
            for(let i = 0; i<state.allUsers.length; i++){
                if(state.allUsers[i].user_id==user.user_id){
                    state.allUsers.splice(i,1);
                    state.allUsers.push(user);
                }
            }
        },

        setSiteStatistics(state, statistics){
            state.siteStatistics = statistics;
        }
    }
})