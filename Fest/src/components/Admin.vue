<template>
        <div class = "admin_container">
            <!-- Loading icon -->
            <div v-if="isLoading" class="loading-container">
                <img v-if="isLoading"
                    src="../assets/images/loading.gif" alt="loading circle"
                >
            </div>

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
                            <div class = "event_management_title">
                                <h2>Manage Users</h2>
                            </div>
                            <div class="user_management_stat">
                                <div class = "total_users">
                                    <h3><span class = "circle"></span>      Total Users</h3>
                                    <h2>{{userStats}}</h2>
                                </div>
                            </div>
                        </div>
                        <div v-if="!isLoading" class = "user_management_bottom">
                            <div class = "user_management_nav">
                                <div class = "user_management_title">
                                    <h2>Search</h2>
                                </div>
                                <div class = "user_search_nav">
                                    <input type="search" placeholder="  Search User Name/Email" v-model="searchUser"/>
                                </div>
                                <div class = "user_result_nav" >
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>User ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Location</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(users,index) in Users" :key="users.user_id">
                                                <td>{{users.user_id}}</td>
                                                <td>{{users.first_name}} {{users.last_name}}</td>
                                                <td>{{users.email}}</td>
                                                <td>{{users.city}} {{users.post_code}}</td>
                                                <td>
                                                    <button type="button" v-on:click="displayModalUser(users.user_id)" >
                                                        <span class="edit_button"></span>
                                                    </button>
                                                    <button type="button" v-on:click="deleteUser(users.user_id)">
                                                        <span class="delete_button"></span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="delete_confirm">
                                <button type="button" class="confirm_delete" v-on:click="confirmDeleteUser()">Confirm Changes</button>
                                <button type="button" class="cancel_delete" v-on:click="refreshPage()" >Cancel Changes</button>
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
                                    <h2>{{eventStats}}</h2>
                                </div>
                            </div>
                        </div>
                        <div class = "event_management_bottom">
                            <div class = "event_management_nav">
                                <div class = "user_management_title">
                                    <h2>Search</h2>
                                </div>
                                <div class = "event_search_nav">
                                    <input type="search" placeholder="  Search Event or Organiser Name" v-model="searchEvent"/>
                                </div>
                                <div class = "event_result_nav">
                                    <table>
                                        <tr>
                                            <th>Event ID</th>
                                            <th>Title</th>
                                            <th>Organiser id</th>
                                            <th>Organiser Name</th>
                                            <th></th>
                                        </tr>
                                        <tr v-for="(event,index) in Events" :key="event.event_id">
                                            <td>{{event.event_id}}</td>
                                            <td>{{event.event_title}}</td>
                                            <td>{{event.user_id}}</td>
                                            <td>{{event.first_name}} {{event.last_name}}</td>
                                            <td>
                                                <button type="button" class="delete_event_button" :value="event.id" v-on:click="deleteEvent(event.event_id)">
                                                X
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="delete_confirm">
                            <button type="button" class="confirm_delete" v-on:click="confirmDeleteEvent()">Confirm Changes</button>
                            <button type="button" class="cancel_delete" v-on:click="refreshPage()" >Cancel Changes</button>
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
                            <h2>{{adminStats}}</h2>
                        </div>
                    </div>
                </div>
                <div class = "admin_management_bottom">
                    <div class = "admin_management_nav1">
                        <div class = "admin_management_title">
                            <h2>Search</h2>
                        </div>
                        <div class = "admin_search_nav">
                            <input type="search" placeholder="  Search Admin Name/Email" v-model="searchAdmin"/>
                        </div>
                        <div class = "admin_result_nav">
                            <table>
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(admins,index) in Admins" :key="admins.user_id">
                                        <td>{{admins.user_id}}</td>
                                        <td>{{admins.first_name}} {{admins.last_name}}</td>
                                        <td>{{admins.email}}</td>

                                        <td>
                                            <button type="button" class="delete_event_button" v-on:click="deleteAdmin(admins.user_id)" >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                       <div class="delete_confirm">
                            <button type="button" class="confirm_delete" v-on:click="confirmDeleteAdmin()">Confirm Changes</button>
                            <button type="button" class="cancel_delete" v-on:click="refreshPage()" >Cancel Changes</button>
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
                                <h1>{{selectedUser.first_name}} {{selectedUser.last_name}}</h1>
                            </div>
                            <div class="admin_management_userid">
                                <h2>id: {{selectedUser.user_id}}</h2>
                            </div>
                        </div>
                    </div>
                    <div class = "admin_management_bottom">
                        <div class = "admin_management_nav">
                            <div class = "admin_management_title">
                                <h2>Manage User Information</h2>
                            </div>
                            <div class = "personal_details">
                                <div class="personal_details_header">
                                    <h3><span class="dot"></span>   Change User Password</h3>
                                </div>
                                <div class = "personal_details_top">
                                    <div class = "first_name">
                                        <label for="profile-first-name">First Name</label><br>
                                        <input type="text" name="first_name" :placeholder = "selectedUser.firstName" v-model="selectedUser.first_name"/>
                                    </div>
                                    <div class = "last_name">
                                        <label for="profile-last-name">Last Name</label><br>
                                        <input type="text" id="profile-last-name" :placeholder = "selectedUser.lastName" v-model="selectedUser.last_name" />
                                    </div>
                                </div>
                                <div class = "personal_details_bottom">
                                    <div>
                                        <label for="profile-contact-number">Contact Number</label><br>
                                        <input type="text" id="profile-contact-number" :placeholder = "selectedUser.contact_number" v-model="selectedUser.contact_number" />
                                    </div>
                                    <div>
                                        <label for="profile-email">Email</label><br>
                                        <input type="text" id="profile-email" :placeholder = "selectedUser.contact_number" v-model="selectedUser.email"  />
                                    </div>
                                </div>
                            </div>
                            <div class = "residence_container">
                                <div class="residence_container_header">
                                    <h3><span class="dot"></span>   Residence</h3>
                                </div>
                                <div class = "residence">
                                    <div class = "residence_top">
                                        <div>
                                            <label for="profile-street-name">Street</label><br>
                                            <input type="text" id="profile-street-name" placeholder = "userInfo.street" v-model="selectedUser.street" />
                                        </div>
                                        <div>
                                            <label for="profile-city">City/Suburb</label><br>
                                            <input type="text" id="profile-city" placeholder = "userInfo.city" v-model="selectedUser.city" />
                                        </div>
                                    </div>
                                    <div class="residence_bottom">
                                        <div>
                                            <label for="profile-country">Country</label><br>
                                            <input type="text" id="profile-country" placeholder ="userInfo.country" v-model="selectedUser.country" />
                                        </div>
                                        <div>
                                            <label for="profile-postcode">Postcode</label><br>
                                            <input type="text" id="profile-postcode" placeholder ="userInfo.post_code" v-model="selectedUser.post_code" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class = "password_container">
                                <div class="password_header">
                                    <h3><span class="dot"></span>   Change User Password</h3>
                                </div>
                                <div class="profile-change-pw">
                                    <div class = "profile_new_password">
                                        <label for="profile-new-password">Enter new password</label><br>
                                        <input type="password" id="profile-new-password" placeholder = "New Password" /> <br>
                                    </div>
                                    <div class="confirm_password">
                                        <label for="profile-confirm-pw">Confirm new password</label><br>
                                        <input type="password" id="profile-confirm-password" placeholder = "Confirm New Password" v-model="selectedUser.password"/>
                                    </div>
                                </div>
                                <div class="error_message">
                                </div>
                                <div class="admin_status">
                                    <label for="user_admin">Admin Status:</label><br>
                                    <label for="true">True</label>
                                    <input type="radio" id="true" name="admin" value="1" v-model="selectedUser.is_admin"/>
                                    <label for="false">False</label>
                                    <input type="radio" id="false" name="admin" value="0"  v-model="selectedUser.is_admin"/>
                                </div>
                                <div class="residence_button">
                                    <div>
                                        <button type="button" class="button-blue save" @click="submitNewUserData()">Save</button>
                                    </div>
                                    <div>
                                        <button class="button-orange cancel" v-on:clic="refreshPage()">Cancel</button>
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