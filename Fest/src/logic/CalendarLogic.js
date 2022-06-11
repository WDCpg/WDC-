import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import store from "@/store/index";



export default {
  components: { VueCal },
  data: () => ({
      calendarEvent: [],
      userCalendarEvent: [],
      selectedDate: new Date(new Date().getFullYear(), 11, 31)
  }),


  computed: {
    userAvailability() {
      console.log(store.state.userAvailability);
      return store.state.userAvailability;
    },

    userId() {
      return store.getters.userId;
    }
  },

  methods: {
    logUserCalendar(event, data) {
      console.log(event, data)

    },

    newCalEvent(event,data){
        this.calendarEvent.push(data.event);

       for (let i = 0; i < this.calendarEvent.length; i++){
            let id = this.calendarEvent[i]._eid.replace("_","");
            let startDate = this.calendarEvent[i].start;
            let endDate = this.calendarEvent[i].end;
            let title = this.calendarEvent[i].title;
            let content = this.calendarEvent[i].content;
            let htmlContent = `<i class="v-icon material-icons">${content}</i>`;
            let object = {
              eid: id,
              start: startDate,
              end: endDate,
              title: title,
              content: htmlContent,
              class: "leisure"
            };
            this.userCalendarEvent.push(object);
            console.log(startDate);

    }
    console.log(this.userCalendarEvent[0]);


    },

    //delete calendar events function
    logEvents(event, data){
      let deleteId = data._eid;
      for(let i = 0; i < this.userCalendarEvent.length; i++){
        if(deleteId == this.userCalendarEvent[i].event_id){
            this.userCalendarEvent.splice(i, 1);
        }
      }
      // console.log(data._eid);
      console.log(this.userCalendarEvent);
    },

    submitUserCalendar(){
      if(this.userCalendarEvent.length!=0){
          store.dispatch('saveUserCalendar',this.userCalendarEvent);
          this.userCalendarEvent = [];
          store.dispatch('fetchUserAvailability');
      }
    }
  },


  created() {
    if (store.getters.userId) {
      store.dispatch('fetchUserAvailability');
    }
  }
}


// click-to-navigate
//                     style="height: 500px"
//                     :events="events"
//                     today-button>