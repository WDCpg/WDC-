import { createStore } from "vuex";
import api from "@/api/DashboardAPI";
import userInfoApi from "@/api/UserProfileAPI";


export default createStore({
    // State == Data
    state: {
        isError: false,
        isLoading: false,
        isDark: false,
        //userInfo template JSON
        userInfo: {
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
        newEvent: [
            {
                "event_temp_id": 1,
                "icon": "&#128047;",
                "event_title": "My title",
                "event_description": "My description goes here",
                "event_privacy": 2,
                "friends_invited": [
                    {
                        "user_id": 2,
                        "first_name": "Ryan",
                        "photo": "path/image.jpg",
                        "availability": [
                            {
                                "day": "Monday",
                                "date": "12-03-2022",
                                is_available: {
                                    "9:00": true,
                                    "9:30": false
                                }
                            }
                        ]
                    }
                ]
            }
        ]



    },

    // Getters == Computed properties
    getters: {

    },

    // Actions == Methods
        //API calls go here.
        // Actions never update the state
    actions: {
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
        }
    },

    // Setting and updating the state.
    // Mutations only set or update the state.
    mutations: {
        isLoading(state) {
            state.isLoading = !state.isLoading;
        },

        updateIconCode(state) {

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