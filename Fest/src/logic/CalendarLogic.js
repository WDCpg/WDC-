import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import store from "@/store/index";


export default {
  components: { VueCal },
  data:()=>{
    return {
      calendarEvent: [],
      userCalendarEvent: [],
      selectedDate: new Date(new Date().getFullYear(), 11, 31)
    }

  },


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

      // if(this.calendarEvent.length!=0){
      //   for(let i = 0; i<this.calendarEvent.length; i++){
      //     if(this.calendarEvent[i]._eid != data.event._eid){
      //       this.calendarEvent.push(data.event);
      //     }
      //   }
      // } else{
      //   this.calendarEvent.push(data.event);
      // }


      console.log(data.event);
      let eid = data.event._eid.replace("_","");
      let startDate = data.event.start;
      let endDate = data.event.end;
      let title = data.event.title;
      let content = data.event.content;
      let htmlContent = `<i class="v-icon material-icons">${content}</i>`;
      let object = {
            eid: eid,
            start: startDate,
            end: endDate,
            title: title,
            content: htmlContent,
            class: "leisure"
      };
      this.userCalendarEvent.push(object);

      console.log(this.userCalendarEvent);

    },

    //delete calendar events function
    logEvents(event, data){
      let deleteId = data._eid.replace("_","");
      for(let i = 0; i < this.userCalendarEvent.length; i++){
        if(deleteId == this.userCalendarEvent[i].eid){
            this.userCalendarEvent.splice(i, 1);
        }
      }
      console.log(this.userCalendarEvent);
    },

    submitUserCalendar(){
      if(this.userCalendarEvent.length!=0){
          store.dispatch('saveUserCalendar',this.userCalendarEvent);
          this.userCalendarEvent = [];
          store.dispatch('fetchUserAvailability');
          this.userCalendarEvent=[];
      }
    }
  },


  created() {
    // if (store.getters.userId) {
      store.dispatch('fetchUserAvailability');
    // }
  }
}


// click-to-navigate
//                     style="height: 500px"
//                     :events="events"
//                     today-button>