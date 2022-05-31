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

        displayLoginModal() {
            document.querySelector(".bg-modal").style.display="flex";
            getPostsRequest();
         }
    }
}