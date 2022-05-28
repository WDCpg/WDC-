const publicEvents = [
    {
        "event_id": 1,
        "icon": 'U+1F600',
        "event_title": "Party at Adelaide Uni"
    },
    {
        "event_id": 1,
        "icon": 'U+1F1FF',
        "event_title": "Party at Adelaide Uni"
    }
]

export default {
    getPublicEvents (events) {
        setTimeout(() => events(publicEvents), 3000)
    }
}