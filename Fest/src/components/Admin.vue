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
                                    <input type="search" placeholder = "  User email" v-model="adminEmailData.state/>
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
        </div>
    </div>
</template>

<style scoped>
@import "@/styles/AdminStyles.css";
</style>

<script src="../logic/AdminLogic.js">
</script>