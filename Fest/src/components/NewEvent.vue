<script setup>
import HeartIcon from "../assets/icons/HeartIcon.vue"
import StarIcon from "../assets/icons/StarIcon.vue";
import UserIcon from "../assets/icons/UserIcon.vue"
</script>

<template>
     <!-- ----------------------------------------------------------------------  -->
        <!-- create new event -->
        <div class="new-event-container ligth">
            <div id = "newEvent">
            <!-- ----------------------------------------------------------------------  -->
            <!-- breadcrumbs navigation -->
                <div class = "topline">
                    <div class="close-button-container">
                        <button class="event-create-cancel" type="button">
                            X
                        </button>
                    </div>
                    <nav class = "breadcrumbs">
                        <span>
                            <a href = "/">Home</a>
                            >
                            <span class = "breadcrumbs">New Event</span>
                        </span>
                    </nav>
                </div>

            <!-- breadcrumbs navigation end -->
            <!-- ----------------------------------------------------------------------  -->

                <h2>New Event</h2>

            <!-- ----------------------------------------------------------------------  -->
            <!-- host details -->
                <div class = "host">
                    <div class="hostImg">
                        <img class="hostIcon" src="../assets/images/P1.jpeg"  alt = " ">
                    </div>
                    <div>
                        <div class="host-name">User Name</div>
                        <div><small class = "hostTitle">Host</small></div>
                    </div>
                </div>
                <br>
                <hr>
            <!-- host details end -->
            <!-- ----------------------------------------------------------------------  -->

            <!-- ----------------------------------------------------------------------  -->
            <!-- event info -->
                <div class = "eventDetails">
                    <h3>Details</h3>

                    <!-- ----------------------------------------------------------------------  -->
                    <!-- emoji search  -->
                    <div class = "emoji">
                        <div class="emoji-search-container">
                            <form class = "emoji-search">
                                <input class = "emoji-search-text" type="search" placeholder="Search Emoji..." name ="emoji">
                                <svg class = "emoji-search-button" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </form>

                            <div class = "emoji-clear">
                                <button class = "emoji-clear-button" type="button">X</button>
                                <div class = "emoji-clear-text">
                                    <p>No</p>
                                    <p>Emoji</p>
                                </div>
                            </div>
                        </div>




                        <div >
                            <ul class = "emoji-list">
                                <li><button class = "emoji-button">&#128513;</button></li>
                                <li><button class = "emoji-button">&#128514;</button></li>
                                <li><button class = "emoji-button">&#128515;</button></li>
                                <li><button class = "emoji-button">&#128516;</button></li>
                                <li><button class = "emoji-button">&#128517;</button></li>
                                <li><button class = "emoji-button">&#128518;</button></li>
                                <li><button class = "emoji-button">&#128519;</button></li>
                                <li><button class = "emoji-button">&#128520;</button></li>
                            </ul>
                        </div>
                    </div>
                <br>
                <!-- emoji search end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event detail -->
                <div class = "event-detail">
                    <textarea rows="2">Event title...</textarea>
                <br>
                <br>
                    <textarea rows="10">Event description...</textarea>
                </div>
                <br>
                <!-- event detail end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event time -->
                <div class = "event-time">
                    <form class = "event-start">
                        <div><i class = "fa fa-calendar" ></i></div>
                        <div class = "event-date">
                            <div>
                                <label>Start Date:</label>
                            </div>
                            <input type = "date" name = "event-start-day" value=" ">
                        </div>
                        <div>
                            <div>
                                <label>Start Time:</label>
                            </div>
                            <input type = "time" name = "event-start-time" value=" ">
                        </div>
                    </form>
                    <br>

                    <form class = "event-end">
                        <div><i class = "fa fa-calendar" ></i></div>
                        <div class = "event-date">
                            <div>
                                <label>End Date:</label>
                            </div>
                            <input type = "date" name = "event-start-day" value=" ">
                        </div>
                        <div>
                            <div>
                                <label>End Time:</label>
                            </div>
                            <input type = "time" name = "event-start-time" value=" ">
                        </div>
                    </form>
                    <br>
                </div>
                <!-- event time end -->
                <!-- ----------------------------------------------------------------------  -->

                <!-- ----------------------------------------------------------------------  -->
                <!-- event photo -->
                <div class = "event-photo">
                    <i class = "fa fa-camera"></i>
                    <label>Upload a cover photo</label>
                    <button class = "event-photo-button">File</button>
                </div>
                <br>
                <!-- event photo end -->
                <!-- ----------------------------------------------------------------------  -->
            </div>
            <hr>
            <!-- event info end -->
            <!-- ----------------------------------------------------------------------  -->

            <!-- ----------------------------------------------------------------------  -->
            <!-- event privacy -->
            <div class = "event-privacy">
                <h3>Event Privacy</h3>

                <!-- ----------------------------------------------------------------------  -->
                <!-- event group -->
                <div class = "event-group">
                    <button type="button" class = "event-group-selector">
                            <div>
                                <HeartIcon />
                            </div>
                            <p>
                                Close <br> Friends
                            </p>
                    </button>

                    <button type="button" class = "event-group-selector">
                            <div>
                                <StarIcon />
                            </div>
                            <p>
                                All <br> Friends
                            </p>
                    </button>

                    <button type="button" class = "event-group-selector">
                            <div>
                                <UserIcon />
                            </div>
                            <p>
                                All <br> Friends
                            </p>
                    </button>


                </div>
                <!-- event group end -->
                <!-- ----------------------------------------------------------------------  -->
                <br>

                <!-- ----------------------------------------------------------------------  -->
                <!-- event invite -->
                <div class = "event-invite">
                    <form class = "event-invite-search">
                        <input class = "event-invite-search-text" type="search" placeholder="Search friend to invite..." name ="emoji">
                        <svg class = "event-invite-search-button" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </form>
                </div>

                <div>
                    <p>Invitations will sent to...</p>
                    <div class="people-invited">
                        <span class="people-invited-delete">&#9940;</span>
                        <img src="../assets/images/P2.jpeg">
                    </div>

                    <div class="people-invited">
                        <span class="people-invited-delete">&#9940;</span>
                        <img src="../assets/images/P3.jpeg">
                    </div>

                    <div class="people-invited">
                        <span class="people-invited-delete">&#9940;</span>
                        <img src="../assets/images/P4.jpeg">
                    </div>
                </div>
                <!-- event invite end -->
                <!-- ----------------------------------------------------------------------  -->
            </div>
            <br>
            <hr>
            <!-- event privacy end -->
            <!-- ----------------------------------------------------------------------  -->

            <!-- ----------------------------------------------------------------------  -->
            <!-- event availability -->
            <div class = "event-attandance">
                <h3>Attandance availability</h3>
                <div class = "event-calendar">
                    <img src = "../assets/images/Calendar.png">
                </div>

            </div>
            <br>
            <!-- event availability end -->
            <!-- ----------------------------------------------------------------------  -->

            <div class= "event-submit">
                <button>Create Event !!!</button>
            </div>

            </div>

            <div class="post-container-major">
                <!-- Post -->
                <div class="post-container">
                    <div class="post-image-container">

                    </div>

                    <div class="post-icon-container">
                        <p>
                            &#129409;
                        </p>
                    </div>
                    <div class="post-details-container">
                        <div class="post-title-container">
                            <h3>
                                Party at Adelaide Uni!
                            </h3>
                        </div>
                        <p class="post-description">
                            Static website for the coming Fest Application made by the best PG group!
                        </p>
                    </div>

                </div>
            </div>

        </div>

        <!-- create new event end -->
        <!-- ----------------------------------------------------------------------  -->
</template>

<style scoped>
@import "@/styles/NewEventStyles.css";
</style>

