<template>
        <div class="logincontent">

                <div class="outer">
                    <div class = "close-button-container">
                        <button v-on:click="hideLoginModal();" class = "close-button-x">
                            X
                        </button>
                    </div>
                    <div class="upperdiv">
                        <h1 class="welcomeback">
                            Welcome back! 
                        </h1>

                        <div>
                            <p class="emoji">
                                &#128400;
                            </p>
                        </div>
                    </div>

                    <div class="lowerdiv">
                        <form action="submitLogin">
                            <p><a href="/">Not a member? Signup</a></p>
                            <label for="email">Email</label><br>
                            <input type="text" id="email" name="email"><br><br>
                            <label for="password">Password</label><br>
                            <input minlength="8" type="password" id="password" name="password">
                            <p><a href="/">Forgot password?</a></p>
                            <!-- GOOGLE LOGIN -->
                            <div id="google-signin-button"></div>
                            <h2>or</h2>
                            <div class="signin-button-container">
                                <!-- <button @click="postSignUp()" type="button" class="signup">Signup</button> -->
                                <button type="submit" @click="submitLogin" class="signin-button">Sign in</button>
                            </div>
                        </form>

                    </div>
                </div>
        </div>
</template>

<style scoped>
@import "@/styles/LoginStyles.css";
</style>

<script src="../logic/LoginLogic.js">
</script>