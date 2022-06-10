// const userAvailability = [
//     {
//       start: '2022-06-05 10:30',
//       end: '2022-06-05 11:30',
//       // You can also define event dates with Javascript Date objects:
//       // start: new Date(2018, 11 - 1, 16, 10, 30),
//       // end: new Date(2018, 11 - 1, 16, 11, 30),
//       title: 'Doctor appointment',
//       content: '<i class="v-icon material-icons">local_hospital</i>',
//       class: 'leisure'
//     },
//     {
//       start: '2018-11-21',
//       end: '2018-11-21',
//       title: 'Golf with John',
//       content: '<i class="v-icon material-icons">golf_course</i>',
//       class: 'sport'
//     },
//     {
//       start: '2018-11-22',
//       end: '2018-11-22',
//       title: 'Dad\'s birthday!',
//       content: '<i class="v-icon material-icons">cake</i>',
//       class: 'sport'
//     }
// ];


// const test = [{start: new Date('2022-06-06T10:30:00.000Z'),
//     end: new Date('2022-06-06T11:30:00.000Z'),
//     title: 'Exam',
//     content: '<i class="v-icon material-icons">Exam</i>',
//     class: 'leisure'}]

    // {
    //     start: '2022-06-05 10:30',
    //     end: '2022-06-05 11:30',
    //     // You can also define event dates with Javascript Date objects:
    //     // start: new Date(2018, 11 - 1, 16, 10, 30),
    //     // end: new Date(2018, 11 - 1, 16, 11, 30),
    //     title: 'Doctor appointment',
    //     content: '<i class="v-icon material-icons">local_hospital</i>',
    //     class: 'leisure'
    //   },

export default {
    getUserAvailability(events){
        return events(test);
    },

    getUserAvailability1 (events) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))

            return events (JSON.parse(this.response));


            }
        }
        //Open connection
        xhttp.open('GET', `http://localhost:8080/userAvailability`, false);

        //Send request
        xhttp.send();

        // setTimeout(() => events(publicEvents), 3000)
    },

    postUserCalendar(CalEvents){
      let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));

            return events (JSON.parse(this.response));

            }
        }
        //Open connection
        xhttp.open('POST', `http://localhost:8080/saveCalendar`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        xhttp.send(JSON.stringify(CalEvents));
    }
}