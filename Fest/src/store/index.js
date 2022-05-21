import { createStore } from "vuex";


export default createStore({
    state: {
        isError: false,
        isLoading: false,
        isDark: false,
        user: {
            "first_name": "Santiago",
            "last_name": "Reyes",
            "dob": "31-07-1999",
            "email": "santiago@gmail.com",
            "street_name": "19 Devon Road",
            "city": "Ascot Vale, VIC",
            "country": "Australia",
            "post_code": 3033,
            "is_active": true, 
            "event_type": "public"
            
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
        exploreEvents: [

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

    getters: {

    },
    
    actions: {

    },

    mutations: {

    }
})