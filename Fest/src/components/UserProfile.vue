<template>
    <div class="main-content">
        <div class="profile-content-left">
            <p class="page_index"><a href="">Home</a> > <a href="">User profile</a></p>
            <h1>User Profile</h1>
            <div class="profile-header">
                <div class="profile-header">
                    <div class="profile-picture" >
                    <img class="user-profile-picture" :src="getImage">
                        <button class = "edit_button" v-on:click="displayModal()">
                            <img src="data:image/png;base64,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">
                        </button>
                    </div>
                    <div v-if="userInfo.first_name != undefined" class="profile-details">
                        <h2>{{userInfo.first_name}}</h2>
                        <p>{{userInfo.street+", " +userInfo.city + ", " +userInfo.country +", " +userInfo.post_code}}</p>
                        <p>{{userInfo.email}}</p>
                    </div>
                </div>
            </div>

            <div class = "personal_details_container">
                <div>
                    <h3> <span class="dot"></span>   Change User Personal Details</h3>
                </div>
                <form @submit.prevent='submit'>
                    <div class="personal_details">
                        <div class = "personal_details_top">
                            <div class = "first_name">
                                <label for="profile-first-name">First Name</label><br>
                                <input type="text" name="first_name" :placeholder = "userInfo.first_name" v-model="newUserData.first_name" />
                            </div>
                            <div class = "last_name">
                                <label for="profile-last-name">Last Name</label><br>
                                <input type="text" id="profile-last-name" :placeholder = "userInfo.last_name" v-model="newUserData.last_name" />
                            </div>
                        </div>
                        <div class = "personal_details_bottom">
                            <div>
                                <label for="profile-contact-number">Contact Number</label><br>
                                <input type="text" id="profile-contact-number" :placeholder ="userInfo.contact_number" v-model="newUserData.contact_data"/>
                            </div>
                            <div>
                                <label for="profile-email">Email</label><br>
                                <input type="text" id="profile-email" :placeholder ="userInfo.email" v-model="newUserData.email" />
                            </div>
                        </div>
                    </div>
                    <div class = "residence_container">
                        <div>
                            <h3><span class="dot"></span>   Residence</h3>
                        </div>
                        <div class = "residence">
                            <div class = "residence_top">
                                <div>
                                    <label for="profile-street-name">Street</label><br>
                                    <input type="text" id="profile-street-name" :placeholder = "userInfo.street" v-model="newUserData.street" />
                                </div>
                                <div>
                                    <label for="profile-city">City/Suburb</label><br>
                                    <input type="text" id="profile-city" :placeholder = "userInfo.city" v-model="newUserData.city" />
                                </div>
                            </div>
                            <div class="residence_bottom">
                                <div>
                                    <label for="profile-country">Country</label><br>
                                    <input type="text" id="profile-country" :placeholder ="userInfo.country" v-model="newUserData.country" />
                                </div>
                                <div>
                                    <label for="profile-postcode">Postcode</label><br>
                                    <input type="text" id="profile-postcode" :placeholder ="userInfo.post_code" v-model="newUserData.post_code" />
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="residence_button">
                        <div>
                            <button type="button" class="button-blue save" @click="submitNewUserData()">Save</button>
                        </div>
                        <div>
                            <button class="button-orange cancel">Cancel</button>
                        </div>
                    </div>
                    <div class = "password_container">
                        <div>
                            <h3><span class="dot"></span>   Change User Password</h3>
                        </div>
                        <div class="profile-change-pw">
                            <div class="profile_password">
                                <label for="profile-password">Enter existing password</label><br>
                                <input type="password" id="profile-password" placeholder = "Current Password" v-model="newUserPassword.user_password" />
                            </div>
                            <div class = "profile_new_password">
                                <label for="profile-new-password">Enter new password</label><br>
                                <input type="password" id="profile-new-password" placeholder = "New Password" /> <br>
                            </div>
                            <div class="confirm_password">
                                <label for="profile-confirm-pw">Confirm new password</label><br>
                                <input type="password" id="profile-confirm-password" placeholder = "Confirm New Password" v-model="newUserPassword.new_password" />
                            </div>
                        </div>
                        <div class="password_button">
                            <button type = "button" class = "button-password" @click = "submitNewUserPassword()">Confirm Change Password</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <div class="profile-content-right">
            <div>
                <h5><span class="dot"></span>   Your Availability</h5>
                <button class="button-google">Sync Google Calendar</button>
            </div>
            <div class="profile-add-availability">
                <h6>Add Availability</h6>
                <!-- <label for="profile-password"></label><br> -->
                <select placeholder="Day">
                    <option>Day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <label for="profile-new-pw"></label>
                <input type="text" id="profile-new-pw" placeholder = "Free From" />
                <label for="profile-confirm-pw"></label>
                <input type="text" id="profile-confirm-pw" placeholder = "Free To" /><br>
                <input type="checkbox" id="radio-repeat"/> <label for="radio-repeat">Repeat Weekly</label>
                <button class="button-blue add">Add</button>
            </div>
            <div class="profile-remove-availability">
                <h6>Remove Availability</h6>
                <div class="remove-availability">
                    <div>
                        <input type="Text" placeholder="Search Availability"/>
                    </div>
                    <div>
                        <button class="button-orange">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class = "upload_modal">
        <div class="upload_container">
            <div class = "close_button">
                <button v-on:click="hideModal()">X</button>
            </div>
            <div class = "modal_heading">
                <h2>Upload Image</h2>
            </div>
            <form action="https://chobbiwan-code50-16236897-vgqjwwq6fx9g5-8080.githubpreview.dev/UploadPicture" method ="post" class = "dropzone" enctype="multipart/form-data">
                <label for = "dropzoneFile">Select File</label>
                <input type = "file" name="file" id="dropzoneFile"/>
                <button type = "submit" class="dropzone_button">Submit</button>
            </form>
        </div>
    </div>

</template>

<style scoped>
@import "@/styles/UserProfileStyles.css";
</style>

<script src="@/logic/ProfileLogic.js"></script>