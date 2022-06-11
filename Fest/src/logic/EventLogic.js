import store from "@/store/index";


export default {
    props: {
        event_id: String
    },

    methods: {
        formatDate(dateString) {
            if (dateString == null) {
                return;
            }
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date) + " " + date.toLocaleTimeString(('en-US'), { hour: '2-digit', minute: '2-digit' });
        }
    },

    computed: {
        eventDetails() {
            console.log('LOGIC ELEMENT', store.state.eventDetails[0])
            return store.state.eventDetails[0];
        },

        eventAttendants() {
            console.log('LOGIC attendants', store.state.eventAttendants[0])
            return store.state.eventAttendants;
        },

        attendantsCount() {
            return store.state.eventAttendantsCount;
        },

        isLoading() {
            return store.state.isLoading;
        }

    },

    created() {
        store.dispatch('updateIsLoading');

        store.dispatch('fetchEventData', this.event_id)
            .then(() => store.dispatch('updateIsLoading'));


    }
}