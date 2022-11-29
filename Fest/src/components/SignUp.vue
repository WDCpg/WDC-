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
                <form action="/register">
                    <h2>Email Signup</h2>
                    <label for="email">Email</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    <label for="password">Password</label><br>
                    <input type="password" id="password" name="password" required>
                <br>
                <!-- GOOGLE LOGIN -->
                <div id="google-signin-button"></div>
                <h2>or</h2>
                <p class="signin"><a href="/" style="text-decoration: none;">Already got an account? Sign in</a></p>
                <div class="signup-button-container">
                    <button @click="postSignUp()" type="button" class="signup">Signup</button>
                </div>
                </form>
                <br>
                <div class="signUpError">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/styles/SignUpStyles.css";
</style>

<script src="@/logic/SignUpLogic.js">
</script>
