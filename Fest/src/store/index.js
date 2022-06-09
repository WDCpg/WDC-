import { createStore } from "vuex";
import api from "@/api/DashboardAPI";
import userInfoApi from "@/api/UserProfileAPI";
import NewEventAPI from "../api/NewEventAPI";
import LoginsAPI from "../api/LoginsAPI";
import RefreshLoginAPI from "../api/RefreshLoginAPI";


export default createStore({
    // State == Data
    state: {
        isError: false,
        isLoading: false,
        isDark: false,
        isTitleChanged: false,
        isDescriptionChanged: false,
        //userInfo template JSON
        userInfo: {
            "first_name": "Santiago",
            "profile_picture": "P1.jpeg"

            // "first_name": "Santiago"
        },
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
            {
                "type": "Event invitation",
                "viewed": false,
                "description": "Your friend invited you to xx event.",
                "action": "/eventId"
            }
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

        invitedFriends: [

        ]
    },



    // Getters == Computed properties
    getters: {
        isDarkGetter(state) {
            return state.isDark;
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
    },

    // Actions == Methods
        //API calls go here.
        // Actions never update the state
    actions: {
        // Invite friend
        // inviteFriend({commit}, friend) {
        //     commit('updateFriendsInvited', friend);

        // },


        // Post New Event
        postNewEvent() {
            NewEventAPI.postNewEvent(this.state.newEventData);
        },
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
                "start_date" : "dd/mm/yyyy",
                "start_time": "--/--",
                "end_date": "dd/mm/yyyy",
                "end_time": "--/--",
                "privacy" : "Public"
            }
            commit('setNewEventDefault', newEventDefault);
        },

        clearInput({commit}, type) {
            let clear = '';

            commit('setNewEventNone', [clear, type]);
        },

        // Login
        submitLogin({commit}, auth) {
            return new Promise((resolve, reject) => {
                LoginsAPI.postLogin(auth, status => {
                    // Forbidden wrong email or password
                    if (status.status == 200) {
                        // Commit user info to state
                        // location.replace("/");
                        console.log(status.rows)
                        commit('setUserInfo', status.rows[0]);
                        console.log('Login successful');
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

        loginOnOpen({commit}) {
            return new Promise((resolve, reject) => {
                RefreshLoginAPI.postLogin(status => {
                    // Forbidden wrong email or password
                    if (status.status == 200) {
                        // Commit user info to state
                        // location.replace("/");
                        console.log(status.rows)
                        commit('setUserInfo', status.rows);
                        console.log('Login successful');
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
    },

    // Setting and updating the state.
    // Mutations only set or update the state.
    mutations: {
        // Invite Friend
        // updateFriendsInvited(state, friend) {
        //     friend['status'] = true;
        //     state.invitedFriends.push(friend);
        // },

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

        updateIconCode(state, emoji) {

            for (let i = 0; i < state.publicEvents.length; i++) {
                let rawCode = state.publicEvents[i].icon.replace("U+", "0x");
                let decoded = String.fromCodePoint(rawCode);
                state.publicEvents[i].icon = decoded;
            }
        },

        setPublicEvents(state, publicEvents) {
            state.publicEvents = publicEvents;
            this.commit('updateIconCode');
        },

        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }

    }
})