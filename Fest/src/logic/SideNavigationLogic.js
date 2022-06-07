import store from "@/store/index";

export default {
    computed: {
        isDark() {
            return store.state.isDark;
        }
    }
}