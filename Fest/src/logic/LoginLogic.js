import store from "@/store/index";

export default {
    methods: {
        hideLoginModal() {
            store.dispatch('toggleLoginModal');
        },

        submitLogin() {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email != undefined && password != undefined) {
                var auth = {
                    "email": email,
                    "password": password
                }

                store.dispatch('submitLogin', auth);
            }
            else {
                return;
            }
            
        }
    }
    
}