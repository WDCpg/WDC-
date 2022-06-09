export default {
    props: {
        event_id: String
    },

    created() {
        console.log(this.event_id)
    }
}