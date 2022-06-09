import store from "@/store/index";

export default {
    computed: {
        newSignupData(){
            return store.state.newSignupData;
            console.log(newSignupData);
        }
    },
    methods: {
        postNewSignupInfo() {
            const checkEmail = document.getElementById("email");
            const checkPassword = document.getElementById("password");
            if (checkPassword.value.length && checkEmail.value.length > 8) {
                console.log(checkEmail);
                console.log(checkPassword);
                store.dispatch('postSignupData');
            } else {
                if(!document.querySelector(".errorMessage")) {
                    let error = document.createElement("p");
                    error.innerText = "Requirements not met, please try again";
                    error.className="errorMessage";
                    error.style.color = "red";
                    document.querySelector(".signUpError").appendChild(error);
                }
            }
        }
    }
}























