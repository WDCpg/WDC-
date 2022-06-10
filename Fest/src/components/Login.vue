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
                        <p><a href="/">Not a member? Sign up</a></p>
                        <br>
                        <form action="submitLogin">
                            <label for="email">Email</label><br>
                            <input type="text" id="email" name="email"><br><br>
                            <label for="password">Password</label><br>
                            <input minlength="8" type="password" id="password" name="password">
                            <p><a href="/">Forgot password?</a></p>
                            <button type="submit" @click="submitLogin" class="signin-button">Sign in</button><br>
                            <p>Or...</p>
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