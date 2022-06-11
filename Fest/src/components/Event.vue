<template>
    <div class="event-content-container" >
        <!-- Loading icon -->
        <div v-if="isLoading" class="loading-container">
            <img v-if="isLoading"
                src="../assets/images/loading.gif" alt="loading circle"
            >
        </div>
        <div v-else class="content-container" id="event-container">
            <div class="post-container-major">
                <!-- Post -->
                <div class="post-container">
                    <div class="post-image-container">

                    </div>

                    <div class="post-icon-container">
                        <p>
                            {{ eventDetails.icon }}
                        </p>
                    </div>
                    <div class="post-details-container">
                        <div class="post-title-container">
                            <h3>
                               {{ eventDetails.event_title }}
                            </h3>
                        </div>
                        <p class="post-description">
                            {{ eventDetails.event_description }}
                        </p>
                        <p class="post-description-label">
                            Start & End date:
                        </p>
                        <p class="post-datetime">
                            <span> {{ formatDate(eventDetails.event_start) }} </span> <span v-if=" eventDetails.event_end != null"> to {{ formatDate(eventDetails.event_end) }} </span>
                            <!-- {{ formatDate('17-03-2022') }} -->
                        </p>
                        <p class="post-description-label">
                            Location
                        </p>
                        <p class="post-location"> 
                            {{ eventDetails.street }}, {{ eventDetails.city }}. {{ eventDetails.country }}
                        </p>
                    </div>

                    
                    
                    
                </div>
            </div>
            <div class="event-container-details">
                <!-- Attendants -->
                <div class="attendants-container">
                    <div class="title-container"> 
                        Attendants
                    </div>
                    <div v-if="eventAttendants.length > 0" class="attendants">
                        <!-- All attendants -->
                        <div class="people-invited" v-for="(attendant, index) in eventAttendants" :key="index">
                            <span class="people-invited-status">
                                <span v-if="attendant.user_status === 'Attending'">&#9940;</span>
                            </span>
                            <img src="../assets/images/P2.jpeg">
                        </div>
                        
                    </div>
                    <div class="numbers-container">
                        <!-- Number of attendants -->
                        <div class="attending-number-container">
                            <div class="total-icon">
                                <img src="../assets/icons/tick.svg" class="icon">
                            </div>
                            <div class="total-description">
                                <p class="description-title">
                                    Attending
                                </p>
                                <p class="description-value">
                                    <span v-if="attendantsCount.length > 0">
                                        {{ attendantsCount[0].number_attendants }}
                                    </span> 
                                    <span v-else>
                                        0
                                    </span>
                                </p>
                            </div>
                        </div>
                        <!-- Number of maybe coming -->
                        <div class="attending-number-container">
                            <div class="total-icon">
                                <img src="../assets/icons/maybe.svg" class="icon">
                            </div>
                            <div class="total-description">
                                <p class="description-title">
                                    Maybe
                                </p>
                                <p class="description-value">
                                    <span v-if="attendantsCount.length > 0">
                                        {{ attendantsCount[1].number_attendants }}
                                    </span> 
                                    <span v-else>
                                        0
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <!-- Recommended Events -->
                <div class="recommended-events-container">
                    <div class="title-container"> 
                        Recommended Events
                    </div>
                    <!-- Notifications Popup -->
                    
                    <div class="notifications-content">
                        <router-link :to="'/event/' + 4"  class="notifications-line">
                            <div class="notifications-icon" >
                                <p>&#128557;</p>
                            </div>
                            <p class="event-title-recommended">
                                My event title 
                                <br>
                                <span>
                                    Date of my event:  31/07/1999
                                </span>
                            </p>
                            
                        </router-link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/styles/EventStyles.css";
</style>

<script src="../logic/EventLogic.js">
    
</script>
