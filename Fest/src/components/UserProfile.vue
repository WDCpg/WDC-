<template>
    <div class="main-content">
        <div class="profile-content-left">
            <p>Home > User profile</p>
            <h1>User Profile</h1>
            <div class="profile-header">
                <div class="profile-header">
                    <div class="profile-picture">
                    </div>
                    <div class="profile-details">
                        <h2>Santiago Reyes</h2>
                        <p>19 Devon Road, Underdale SA 5000</p>
                        <p>santi@gmail.com</p>
                    </div>
                </div>
            </div>

            <div>
                <h5> <span class="dot"></span> Personal Details</h5>
                <form>
                    <div>
                        <div>
                            <label for="profile-first-name"></label>
                            <input type="text" id="profile-first-name" placeholder = "First Name" />
                            <label for="profile-last-name"></label>
                            <input type="text" id="profile-last-name" placeholder = "Last Name" />
                        </div>
                        <div>
                            <br>
                            <label for="profile-dob"></label>
                            <input type="text" id="profile-dob" placeholder ="Date of Birth" />
                            <label for="profile-email"></label>
                            <input type="text" id="profile-email" placeholder ="Email" />
                        </div>
                    </div>
                    <div>
                        <br>
                        <h5><span class="dot"></span> Residence</h5>
                        <div>
                            <label for="profile-street-name"></label>
                            <input type="text" id="profile-street-name" placeholder = "Street Name" />
                            <label for="profile-city"></label>
                            <input type="text" id="profile-city" placeholder = "City" />
                        </div>
                        <div>
                            <br>
                            <label for="profile-country"></label>
                            <input type="text" id="profile-country" placeholder ="Country" />
                            <label for="profile-postcode"></label>
                            <input type="text" id="profile-postcode" placeholder ="Post Code" />
                        </div>
                    </div>
                    <div>
                        <br>
                        <h5><span class="dot"></span> Change Passwords</h5>
                        <div class="profile-change-pw">
                            <label for="profile-password">Enter existing password</label><br>
                            <input type="text" id="profile-password" placeholder = "Current Password" /><br><br>
                            <label for="profile-new-pw">Enter new password</label><br>
                            <input type="text" id="profile-new-pw" placeholder = "New Password" /> <br><br>
                            <label for="profile-confirm-pw">Confirm new password</label><br>
                            <input type="text" id="profile-confirm-pw" placeholder = "Confirm New Password" />
                        </div>
                    </div>
                    <!-- <br> -->
                    <button class="button-blue save">Save</button>
                    <button class="button-orange">Cancel</button>
                </form>
            </div>
        </div>
        <div class="profile-content-right">
            <div>
                <h5><span class="dot"></span> Your Availability</h5>
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
</template>

<style scoped>
@import "@/styles/UserProfileStyles.css";
</style>