<template>
    <div class="register-container">
        <div class="outerouterdiv">
            <div class="outer">
                <div class="upperdiv">
                    <h1 class="welcomeback">
                        Let's get set up<br>
                    </h1>
                </div>
                <div class="lowerdiv">
                    <h2>Your details</h2>
                    <form action="/userdetails.php">
                        <div class="personal-details-container">
                            <label for="firstname">First name</label><br>
                            <input type="text" id="firstname" name="firstname"><br><br>
                            <label for="lastname">Last name</label><br>
                            <input type="text" id="lastname" name="lastname"><br><br>
                            <label for="dateofbirth">Date of birth</label><br>
                            <input type="date" id="dateofbirth" name="dateofbirth">
                        </div>
                        
                        <div class="personal-details-container">
                                                <h2>Your address</h2>
                        <label for="Streetname">Street name</label><br>
                        <input type="text" id="streetname" name="streetname"><br><br>
                        <label for="city">City</label><br>
                        <input type="text" id="city" name="city"><br><br>
                        <div class="country">
                                <div>
                                <label for="country">Country</label>
                                <input type="text" id="country" name="country">
                            </div>
                            <div>
                                <label for="Post code">Post code</label>
                                <input type="text" id="postcode" name="postcode">
                            </div>

                        </div>
                    </div>
                    <h2>Your availability</h2>
                    <div class="button-container">
                        <button class="sync" type="button">Sync Google Calender </button>
                    </div>
                    <h2>Or...</h2>
                    <div class="availability">
                        <div>
                            <br>
                            <select>
                                <option>Day</option>
                            </select>
                        </div>
                        <div>
                            <label for="freefrom">Free From</label><br>
                            <input type="date" id="freefrom" name="freefrom">
                        </div>
                        <div>
                            <label for="freeto">Free to</label><br>
                            <input type="date" id="freeto" name="freeto"><br><br>
                        </div>
                    </div>
                    <div class="button-container">
                        <button class="save">Save</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import "@/styles/RegisterStyles.css";
</style>