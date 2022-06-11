<template>
    <div class="outerouterdiv">
        <div class="outer">
            <div class = "close-button-container">
                <button v-on:click="hideSignUpModal" class = "close-button-x">
                    X
                </button>
            </div>
            <div class="upperdiv">
                <h1 class="join">
                    Join the Fest!<br>
                </h1>
            </div>
            <div class="lowerdiv">
                <h2>Email Sign up</h2>
                <form action="/register">
                    <label for="email">Email</label><br>
                    <input type="text" id="email" name="email"><br><br>
                    <label for="password">Password</label><br>
                    <input type="password" id="password" name="password">
                <br>
                <!-- GOOGLE LOGIN -->
                <div id="google-signin-button"></div>
                <h2>Or...</h2>
                
                <p class="signin"><a href="/" style="text-decoration: none;">Already got an account? Sign in</a></p>
                <div class="signup-button-container">
                    <button type="submit" class="signup">Sign up</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/styles/SignUpStyles.css";
</style>

<script src="@/logic/signUpLogic.js">
</script>
