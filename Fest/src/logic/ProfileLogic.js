import store from "@/store/index";

export default {
    computed: {
        userInfo() {
            return store.state.userInfo;
        },

        isLoading() {
            return store.state.isLoading;
        },

        newUserData(){
            return store.state.newUserData;
        }
    },

    created() {
        store.dispatch('updateIsLoading');
        store.dispatch('fetchUserInfo')
            .then(() => store.dispatch('updateIsLoading'));
    },

    methods: {
        async submit(e) {
            let body = new FormData(e.target);
            let name = e.target.elements.first_name.value;
            console.log(body);
            // let body = {

        },
            // store.dispatch('updateUserDetails', body);

        hideModal: function(){
            document.querySelector(".upload_modal").style.display="none";
            document.querySelector(".main-content").style.filter = "none";

        },

        displayModal: function(){
            document.querySelector(".main-content").style.filter = "blur(8px)";
            document.querySelector(".upload_modal").style.display="flex";
        },

        submitNewUserData() {
            store.dispatch('postNewUserData');
        }

    }
}































// function update_profile() {

//     let firstName = document.getElementById('profile-first-name').value;
//     let lastName = document.getElementById('profile-last-name').value;
//     let contactNumber = document.getElementById('profile-contact-number').value;
//     let email = document.getElementById('profile-email').value;
//     let city = document.getElementById('profile-city').value;
//     let street = document.getElementById('profile-street-name').value;
//     let country = document.getElementById('profile-country').value;
//     let postCode = document.getElementById('profile-postcode').value;


//     let new_p = {first_name: firstName, last_name: lastName, contact_number: contactNumber, email: email, city: city, street: street, country:country, post_code:postCode};

//     let xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//         }
//     };

//     xhttp.open("POST", "/actors");
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(JSON.stringify(new_p));

// }

// function update_profile() {

//     let userPassword = document.getElementById('profile-password').value;
//     let newPassword = document.getElementById('profile-new-password').value;



//     let passwordJson = {user_password: userPassword, new_password: newPassword};

//     let xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//         }
//     };

//     xhttp.open("POST", "/actors");
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(JSON.stringify(passwordJson));

// }