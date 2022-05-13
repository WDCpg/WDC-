<template>
    
    <div class="logincontent">

            <div class="outer">
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
                    <p><a href="google.com" style="text-decoration: none;">Not a member? Sign up</a></p>
                    <form action="/userdetails.php">
                    <label for="email">Email</label><br>
                    <input type="text" id="email" name="email"><br><br>
                    <label for="password">Password</label><br>
                    <input type="text" id="password" name="password">
                    <input name="q" type="text"><br>
                    </form>
                    <p><a href="google.com" style="text-decoration: none;">Forgot password?</a></p>
                    <button class="signin">Sign in</button>
                </div>
            </div>
        </div>
</template>

<style scoped>
@import "@/styles/LoginStyles.css";
</style>