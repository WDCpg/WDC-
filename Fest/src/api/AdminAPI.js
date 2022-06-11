import store from "@/store/index";

export default{
    //test--------------//
    getAllUsers1 (events){
        console.log(user);
        return events(user);
    },

    getAllEvents1 (events){
        console.log(event);
        return events(event);
    },

    getAllAdmins1 (events){
        console.log('admin',this.admins);
        return events(admins);
    },

    //-----------------------//
    getAllUsers (events) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.response))

            return events (JSON.parse(this.response));


            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getAllUsers`, false);

        //Send request
        xhttp.send();

        // setTimeout(() => events(publicEvents), 3000)
    },

    getAllEvents (events) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.response))

            return events (JSON.parse(this.response));


            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getAllEvents`, false);

        //Send request
        xhttp.send();

        // setTimeout(() => events(publicEvents), 3000)
    },

    getAllAdmins(events) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.response))

            return events (JSON.parse(this.response));


            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getAllAdmins`, false);

        //Send request
        xhttp.send();
    },

    deleteUserEvents(events){
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/adminDeleteEvent`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        let body = {'user':events};

        xhttp.send(JSON.stringify(body));
     },

     deleteUser(user){
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/adminDeleteUser`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        let body = {'user_id': user};

        xhttp.send(JSON.stringify(body));
     },

     deleteAdmin(user){
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/adminDeleteAdmin`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        let body = {'user_id':user};
        xhttp.send(JSON.stringify(body));
     },

     adminPostUserInfo(newUserData) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/adminUpdateUserData`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        //Send request
        xhttp.send(JSON.stringify(newUserData));

    },

    getStatistics(events) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            // console.log(JSON.parse(this.response))

            return events (JSON.parse(this.response));


            }
        }
        //Open connection
        xhttp.open('GET', `${store.state.backEndUrl}/getSiteStatistics`, false);

        //Send request
        xhttp.send();
    }

}