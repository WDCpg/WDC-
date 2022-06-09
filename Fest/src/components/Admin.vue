<template>
    <div>
        <div class = "admin_container">
            <div class="admin_header">
                <div class = "admin_header_title">
                    <h1>System Management</h1>
                </div>
                <div class = "admin_header_button">
                    <button type="button" class="add-admin-button" v-on:click="displayModal()">Edit Admins</button>
                </div>
            </div>
            <div class ="management_container">
                <div class="management_container_left">
                    <div class = "user_management">
                        <div class = "user_management_top">
                            <div class = "user_management_title">
                                <h2>Manage Users</h2>
                            </div>
                            <div class="user_management_stat">
                                <div class="active_uers">
                                    <h3><span class = "circle"></span>      Active Users</h3>
                                    <h2>20,000</h2>
                                </div>
                                <div class = "total_users">
                                    <h3><span class = "circle"></span>      Total Users</h3>
                                    <h2>20,000</h2>
                                </div>
                                <div class = "logged_in">
                                    <h3><span class = "circle"></span>      Logged In</h3>
                                    <h2>20,000</h2>
                                </div>
                            </div>
                        </div>
                        <div class = "user_management_bottom">
                            <div class = "user_management_nav">
                                <div class = "user_management_title">
                                    <h2>Search</h2>
                                </div>
                                <div class = "user_search_nav">
                                    <input type="search" placeholder="  Search User name"/>
                                    <input type="search" placeholder = "  User email"/>
                                    <input type ="search" placeholder = "  User id"/>
                                </div>
                                <div class = "user_result_nav">
                                    <table>
                                        <tr>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>a154785</td>
                                            <td>James Edmond</td>
                                            <td>JamesEdmond@gmail.com</td>
                                            <td>Underdale SA 5000</td>
                                            <td>
                                                <button type="button" v-on:click="displayModalUser">
                                                    <span class="edit_button"></span>
                                                </button>
                                                <button type="button" >
                                                    <span class="delete_button"></span>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "management_container_right">
                    <div class = "event_management">
                        <div class = "event_management_top">
                            <div class = "event_management_title">
                                <h2>Manage Events</h2>
                            </div>
                            <div class="event_management_stat">
                                <div class="active_uers">
                                    <h3><span class = "circle"></span>      Active Events</h3>
                                    <h2>20,000</h2>
                                </div>
                                <div class = "total_users">
                                    <h3><span class = "circle"></span>      Past Events</h3>
                                    <h2>20,000</h2>
                                </div>
                                <div class = "logged_in">
                                    <h3><span class = "circle"></span>      Total Events</h3>
                                    <h2>20,000</h2>
                                </div>
                            </div>
                        </div>
                        <div class = "event_management_bottom">
                            <div class = "event_management_nav">
                                <div class = "user_management_title">
                                    <h2>Search</h2>
                                </div>
                                <div class = "event_search_nav">
                                    <input type="search" placeholder="  Search event title"/>
                                    <input type ="search" placeholder = "  Event id"/>
                                    <input type="search" placeholder = "  Location"/>
                                </div>
                                <div class = "user_result_nav">
                                    <table>
                                        <tr>
                                            <th>Event ID</th>
                                            <th>Title</th>
                                            <th>Organiser</th>
                                            <th>Location</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>1785</td>
                                            <td>Jame's Party</td>
                                            <td>James Edmon a154785</td>
                                            <td>Underdale SA 5000</td>
                                            <td>
                                                <button type="button" >
                                                    <span class="edit_button"></span>
                                                </button>
                                                <button type="button" >
                                                    <span class="delete_button"></span>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="admin_modal">
            <div class = "admin_management">
                <div class = "modal_button">
                    <button class="close_modal_button" v-on:click="hideModal()">X</button>
                </div>
                <div class = "admin_management_top">
                    <div class = "admin_management_title">
                        <h2>Manage Admins</h2>
                    </div>
                    <div class="admin_management_stat">
                        <div class="active_admin">
                            <h3><span class = "circle"></span>Admins</h3>
                            <h2>5</h2>
                        </div>
                        <div class = "logged_in">
                            <h3><span class = "circle"></span>Online Admins</h3>
                            <h2>2</h2>
                        </div>
                    </div>
                </div>
                <div class = "admin_management_bottom">
                    <div class = "admin_management_nav">
                        <div class = "admin_management_title">
                            <h2>Search</h2>
                        </div>
                        <div class = "admin_search_nav">
                            <input type ="search" placeholder = "  Admin ID"/>
                            <input type="search" placeholder="  Search Admin Name"/>
                        </div>
                        <div class = "admin_result_nav">
                            <table>
                                <tr>
                                    <th>Admin ID</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>1785</td>
                                    <td>James Edmon</td>
                                    <td>
                                        <button type="button">
                                            <span class="edit_button"></span>
                                        </button>
                                        <button type="button" >
                                            <span class="delete_button"></span>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit_user_modal">
                <div class = "admin_management">
                    <div class = "modal_button2">
                        <button class="close_modal_button" v-on:click="hideModalUser()">X</button>
                    </div>
                    <div class = "admin_management_top">
                        <div class = "admin_management_title">
                            <h2>Edit User</h2>
                        </div>
                        <div class="admin_management_stat">
                            <div>
                                <h1>Ryan Nguyen</h1>
                            </div>
                            <div class="active_admin">
                                <h2>a1669953</h2>
                            </div>
                        </div>
                    </div>
                    <div class = "admin_management_bottom">
                        <div class = "admin_management_nav">
                            <div class = "admin_management_title">
                                <h2>Manage User Information</h2>
                            </div>
                            <div class = "personal_details">
                                <div class = "personal_details_top">
                                    <div class = "first_name">
                                        <label for="profile-first-name">First Name</label><br>
                                        <input type="text" name="first_name" placeholder = "userInfo.first_name"/>
                                    </div>
                                    <div class = "last_name">
                                        <label for="profile-last-name">Last Name</label><br>
                                        <input type="text" id="profile-last-name" placeholder = "userInfo.last_name"  />
                                    </div>
                                </div>
                                <div class = "personal_details_bottom">
                                    <div>
                                        <label for="profile-contact-number">Contact Number</label><br>
                                        <input type="text" id="profile-contact-number" placeholder ="userInfo.contact_number" />
                                    </div>
                                    <div>
                                        <label for="profile-email">Email</label><br>
                                        <input type="text" id="profile-email" placeholder ="userInfo.email"  />
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
                                            <input type="text" id="profile-street-name" placeholder = "userInfo.street" />
                                        </div>
                                        <div>
                                            <label for="profile-city">City/Suburb</label><br>
                                            <input type="text" id="profile-city" placeholder = "userInfo.city" />
                                        </div>
                                    </div>
                                    <div class="residence_bottom">
                                        <div>
                                            <label for="profile-country">Country</label><br>
                                            <input type="text" id="profile-country" placeholder ="userInfo.country" />
                                        </div>
                                        <div>
                                            <label for="profile-postcode">Postcode</label><br>
                                            <input type="text" id="profile-postcode" placeholder ="userInfo.post_code" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class = "password_container">
                                <div>
                                    <h3><span class="dot"></span>   Change User Password</h3>
                                </div>
                                <div class="profile-change-pw">
                                    <div class = "profile_new_password">
                                        <label for="profile-new-password">Enter new password</label><br>
                                        <input type="password" id="profile-new-password" placeholder = "New Password" /> <br>
                                    </div>
                                    <div class="confirm_password">
                                        <label for="profile-confirm-pw">Confirm new password</label><br>
                                        <input type="password" id="profile-confirm-password" placeholder = "Confirm New Password" />
                                    </div>
                                </div>
                                <div class="admin_status">
                                    <label for="user_admin">Admin Status</label><br>
                                    <input type="radio" id="user_admin" name="admin"/>
                                    <input type="radio" id="user_admin" name="admin"/>
                                </div>
                                <div class="residence_button">
                                    <div>
                                        <button type="button" class="button-blue save" @click="submitNewUserData()">Save</button>
                                    </div>
                                    <div>
                                        <button class="button-orange cancel">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
@import "@/styles/AdminStyles.css";
</style>

<script src="../logic/AdminLogic.js">
</script>