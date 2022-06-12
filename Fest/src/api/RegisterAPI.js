import store from "@/store/index";

export default {
    postRegisterInfo (newRegisterData) {
        let xhttp = new XMLHttpRequest();

        //Run on response
        xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            return this.response;
            }
        }
        //Open connection
        xhttp.open('POST', `${store.state.backEndUrl}/register`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
        xhttp.withCredentials = true;

        //Send request
        console.log(newRegisterData);
        xhttp.send(JSON.stringify(newRegisterData));
    }
}
