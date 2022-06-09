import store from "@/store/index";

export default {
    methods: {
        hideModal: function(){
            document.querySelector(".admin_modal").style.display="none";

        },

        displayModal: function(){
            document.querySelector(".admin_modal").style.display="flex";
        },
    },
    computed: {
        adminEmailData() {
            return store.state.adminEmailData;
        }
    }
}