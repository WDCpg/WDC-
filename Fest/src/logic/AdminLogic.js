import store from "@/store/index";

export default {
    data () {
        return {
            deleteEvents: [],
            deleteUsers:[],
            selectedUser: [],
            deleteAdmins:[],
            searchUser: '' ,
            searchEvent: '',
            searchAdmin: ''
        }
    },

    methods: {
        hideModal: function(){
            document.querySelector(".admin_modal").style.display="none";

        },

        displayModal: function(){
            document.querySelector(".admin_modal").style.display="flex";
        },

        hideModalUser: function(){
            document.querySelector(".edit_user_modal").style.display="none";

        },


        displayModalUser: function(user_id){
            document.querySelector(".edit_user_modal").style.display="flex";
            for(let i = 0; i<store.state.allUsers.length; i++){
                if(store.state.allUsers[i].user_id ==user_id){
                    this.selectedUser=store.state.allUsers[i];
                }
            }
        },

        //DELETE EVENTS//
        deleteEvent(event_id){
            this.deleteEvents.push(event_id);
            console.log(event_id);
            for (let i = 0; i<store.state.allEvents.length;i++){
                if(store.state.allEvents[i].event_id == event_id){
                    store.state.allEvents.splice(i,1);
                }
            }
        },

        confirmDeleteEvent(){
            console.log(this.deleteEvents);
            if (this.deleteEvents.length>0){
                store.dispatch('adminDeleteEvent', this.deleteEvents);
            }
        },

         //DELETE USERS//
         deleteUser(user_id){
            this.deleteUsers.push(user_id);
            console.log(user_id);
            for (let i = 0; i<store.state.allUsers.length;i++){
                if(store.state.allUsers[i].user_id == user_id){
                    store.state.allUsers.splice(i,1);
                }
            }
        },

        confirmDeleteUser(){
            console.log(this.deleteUsers);
            if (this.deleteUsers.length>0){
                store.dispatch('adminDeleteUser', this.deleteUsers);
            }
        },

        //DELETE ADMIN//
        deleteAdmin(admin_id){
            this.deleteAdmins.push(admin_id);
            for (let i = 0; i<store.state.allAdmins.length;i++){
                if(store.state.allAdmins[i].user_id == admin_id){
                    store.state.allAdmins.splice(i,1);
                }
            }
        },

        confirmDeleteAdmin(){
            console.log(this.deleteAdmins);
            if (this.deleteAdmins.length!=0){
                store.dispatch('adminDeleteAdmin', this.deleteAdmins);
            }
        },

        refreshPage(){
            window.location.reload();
        },

        submitNewUserData(){
            let newPassword = document.getElementById("profile-new-password").value;
            let confirmPassword = document.getElementById("profile-confirm-password").value;
            console.log(this.selectedUser);


            if (newPassword != confirmPassword && newPassword.replace(/\s/g, '').length!=0 && !document.querySelector(".error_message2")){
                let errorMessage2 = document.createElement("p");
                errorMessage2.className="error_message2";
                errorMessage2.innerText = "Confirmation Password Does Not Match";
                errorMessage2.style.color = "red";
                document.querySelector(".error_message").appendChild(errorMessage2);
            }

            if(newPassword == confirmPassword && newPassword.replace(/\s/g, '').length!=0 && newPassword.replace(/\s/g,'').length<8 && !document.querySelector(".error_message3")){
                let errorMessage3 = document.createElement("p");
                errorMessage3.className="error_message3";
                errorMessage3.innerText = "Password needs to be atleast 8 characters";
                errorMessage3.style.color = "red";
                document.querySelector(".error_message").appendChild(errorMessage3);
            }

            if(newPassword == confirmPassword && newPassword.replace(/\s/g, '').length!=0 && newPassword.replace(/\s/g, '').length>=8){
                if( document.querySelector(".error_message2")){
                    document.querySelector(".error_message2").remove();
                }
                if(document.querySelector(".error_message3")){
                    document.querySelector(".error_message3").remove();
                }

                let successMessage = document.createElement("p");
                successMessage.className="success_message";
                successMessage.innerText = "Success";
                successMessage.style.color = "green";
                document.querySelector(".error_message").appendChild(successMessage);
                store.dispatch('postNewUserInfo', this.selectedUser);
            }

            if(newPassword.replace(/\s/g, '').length==0 && confirmPassword.replace(/\s/g, '').length==0 && !document.querySelector(".success_message") ){
                let successMessage = document.createElement("p");
                successMessage.className="success_message";
                successMessage.innerText = "Success";
                successMessage.style.color = "green";
                document.querySelector(".error_message").appendChild(successMessage);
                store.dispatch('postNewUserInfo', this.selectedUser);

            }

        }



    },
    computed: {
        isLoading() {
            return store.state.isLoading;
        },


        Users(){
            //  return store.state.allUsers;
            let search = this.searchUser.toLowerCase();

            if (store.state.allUsers.length > 0) {
                return store.state.allUsers.filter(user=>
                        user.first_name.toLowerCase().includes(search)
                        || user.last_name.toLowerCase().includes(search)
                        || user.email.toLowerCase().includes(search));
            }
            return;
            //

        },

        Events(){
            // return store.state.allEvents;
            let search = this.searchEvent.toLowerCase();

            if(store.state.allEvents.length>0){
                return store.state.allEvents.filter(event=>
                    event.event_title.toLowerCase().includes(search));
            }
            return;
        },

        Admins(){
            // return store.state.allAdmins;
            let search = this.searchAdmin.toLowerCase();

            if(store.state.allAdmins.length>0){

                return store.state.allAdmins.filter(admin=>
                    admin.first_name.toLowerCase().includes(search)
                    || admin.last_name.toLowerCase().includes(search));
            }
        },

        eventStats(){
            // console.log(store.state.siteStatistics);
            // return store.state.siteStatistics;
            let count = 0;

            for(let i = 0; i<store.state.allEvents.length; i++){
                count++;
            }
            return count;

        },

        userStats(){
            let count = 0;

            for(let i = 0; i<store.state.allUsers.length; i++){
                count++;
            }
            return count;
        },

        adminStats(){
            let count = 0;

            for(let i = 0; i<store.state.allAdmins.length; i++){
                count++;
            }
            return count;
        }

    },

    created() {
        store.dispatch('updateIsLoading');

        store.dispatch('loadAdminPage')
            .then(() => store.dispatch('updateIsLoading'));
    }
}