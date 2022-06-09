 <template>
  <div id="app">
  <button @click="login()">CLICK HERE</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLogin:false
    };
  },
  methods: {
    async login(){
      const googleUser=await this.$gAuth.signIn();
      console.log('googleUser', googleUser);
    },
  },
};
</script>

