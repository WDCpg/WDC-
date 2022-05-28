import store from "@/store/index"

export default {
    methods: {
        getPublicEvents() {

        },

        changeStyleMode() {
            // Elements to change
            let navBar = document.getElementById('navigation-container');
            let menuIcon = document.getElementById('menu-button');
            let companyName = document.getElementById('company-name');
            let sideNav = document.getElementById('side-menu-container');

            let elementsToUpdate = [
                navBar, menuIcon, companyName, sideNav
            ];

            for (let i = 0; i < elementsToUpdate.length; i++) {
                elementsToUpdate[i].classList.toggle('dark');
                elementsToUpdate[i].classList.toggle('light');
            }
        },

        getPostsRequest() {
            // App Functions
            var store = {
                allPosts: []
            }
            let xhttp = new XMLHttpRequest();

            //Run on response
            xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                store.allPosts = JSON.parse(this.response);
                console.log(store);
                return true;
                }
            }
            //Open connection
            xhttp.open('GET', 'http://localhost:3001/getUserEvents', false);

            //Send request
            xhttp.send();
        },

        displayLoginModal() {
            document.querySelector(".bg-modal").style.display="flex";
            getPostsRequest();
         }
    }
}