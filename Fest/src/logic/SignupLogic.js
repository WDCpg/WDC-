import store from "@/store/index";

export default {
    computed: {
        newSignupData(){
            return store.state.newSignupData;
        }
    },
    methods: {
        postNewSignupInfo() {
            const checkEmail = document.getElementById("email");
            const checkPassword = document.getElementById("password");
            if (checkPassword.value.length && checkEmail.value.length > 8) {
                console.log(checkEmail);
                console.log(checkPassword);
                store.dispatch('postRegisterData');
            } else {

            }
        }
    }
}
























