import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';


export default {
  components: { VueCal },
  data: () => ({
    events: [
      {
        start: '2022-06-05 10:30',
        end: '2022-06-05 11:30',
        // You can also define event dates with Javascript Date objects:
        // start: new Date(2018, 11 - 1, 16, 10, 30),
        // end: new Date(2018, 11 - 1, 16, 11, 30),
        title: 'Doctor appointment',
        content: '<i class="v-icon material-icons">local_hospital</i>',
        class: 'leisure'
      },
      {
        start: '2018-11-21',
        end: '2018-11-21',
        title: 'Golf with John',
        content: '<i class="v-icon material-icons">golf_course</i>',
        class: 'sport'
      },
      {
        start: '2018-11-22',
        end: '2018-11-22',
        title: 'Dad\'s birthday!',
        content: '<i class="v-icon material-icons">cake</i>',
        class: 'sport'
      }
    ],
    selectedDate: new Date(new Date().getFullYear(), 11, 31),

  }),

}


// click-to-navigate
//                     style="height: 500px"
//                     :events="events"
//                     today-button>