<template>
    <div class="event-content-container" >
        <div class="content-container" id="event-container">
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
                                Hello 
                            </h3>
                        </div>
                        <p class="post-description">
                            My event recommendations and description 
                             of this great event go here
                        </p>
                        <p class="post-description-label">
                            Start & End date:
                        </p>
                        <p class="post-datetime">
                            <span> 17-03-2022: 8:00 </span> <span> to 18-03-2022 10:00 </span>
                            <!-- {{ formatDate('17-03-2022') }} -->
                        </p>
                        <p class="post-description-label">
                            Location
                        </p>
                        <p class="post-location"> 
                            19 Devon Road, Melbourne. VIC.
                            <!-- {{ formatLocation('17-03-2022') }} -->
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
                    <div class="attendants">
                        <!-- All attendants -->
                        <div class="people-invited">
                            <span class="people-invited-status">
                                &#9940;
                            </span>
                            <img src="../assets/images/P2.jpeg">
                        </div>
                        <div class="people-invited">
                            <span class="people-invited-status">
                                &#9940;
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
                                    250
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
                                    13
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
