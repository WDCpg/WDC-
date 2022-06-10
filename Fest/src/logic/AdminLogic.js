import store from "@/store/index";

export default {
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

        displayModalUser: function(){
            document.querySelector(".edit_user_modal").style.display="flex";
        },
    },
    computed: {
    }
}