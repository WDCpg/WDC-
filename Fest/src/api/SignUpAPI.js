import store from "@/store/index";

export default {
    // First parameter has data, second returns status
    googleSignUp (id_token, profile, status) {

        console.log('PROFILE API',profile)
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                console.log('RESULT', this.response);
                return status(JSON.parse(this.response));
            }
            else if (this.readyState == 4)  {
                return status(this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/signUp`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

        let body = { 
            "token": id_token,
            "profile": profile
        };
        //Send request
        xhttp.send(JSON.stringify(body));
    },

    signUp (auth, status) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                console.log('RESULT', this.response);
                return status(JSON.parse(this.response));
            }
            else if (this.readyState == 4)  {
                return status(this.status);
            }
        }

        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/signUp`, true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader('Content-type', 'application/json');

        //Send request
        xhttp.send(JSON.stringify(auth));
    },

    postSignUpData(data, status) {
        
    }
}