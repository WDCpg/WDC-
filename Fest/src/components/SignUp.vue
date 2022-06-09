<template>
    <div class="outerouterdiv">
        <div class="outer">
            <div class="upperdiv">
                <h1 class="join">
                    Join the Fest!<br>
                </h1>
            </div>
            <div class="lowerdiv">
                <h2>Email Sign up</h2>
                <form action="/register">
                    <label for="email">Email</label><br>
                    <input type="email" id="email" name="email" v-model="newSignupData.email"><br><br>
                    <label for="password">Password</label><br>
                    <input type="password" id="password" name="password" minlength="8" required v-model="newSignupData.password">
                <br>
                <h2>Or...</h2>
                <div class="rectangleleft"></div>
                <div class="rectangleleft"></div>
                <div class="rectangleleft"></div><br><br><br>
                <p class="signin"><a href="/" style="text-decoration: none;">Already got an account? Sign in</a></p>
                <div class="signup-button-container">
                    <button type="button" class="signup">Sign up</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/styles/SignUpStyles.css";
</style>

<script src="@/logic/SignupLogic.js">
</script>