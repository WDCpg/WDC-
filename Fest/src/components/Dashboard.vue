<template>
    <div class="dashboard-content-container">
        <div class="dashboard-title-container">
            <h1>
                Dashboard - Your events
            </h1>
        </div>
        <div class="dashboard-buttons-container">
            <button type="button" class="new-event-button">
                <div class="button-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="Plus" x="0" y="-0" width="2131.59" height="2106.64" style="fill:none;"/><g><path d="M1117.5,236.357l-0,1633.93" style="fill:none;stroke:#fff;stroke-width:350.19px;"/><path d="M300.53,1053.32l1633.93,0" style="fill:none;stroke:#fff;stroke-width:350.19px;"/></g></svg>
                </div>
                New Event
            </button>
            <button type="button" class="edit-button">
                <div class="button-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="Plus" x="0" y="-0" width="2131.59" height="2106.64" style="fill:none;"/><g><path d="M1117.5,236.357l-0,1633.93" style="fill:none;stroke:#fff;stroke-width:350.19px;"/><path d="M300.53,1053.32l1633.93,0" style="fill:none;stroke:#fff;stroke-width:350.19px;"/></g></svg>
                </div>
                Edit
            </button>
        </div>

       
            <img v-if="isLoading"
                src="https://i.imgur.com/JfPpwOA.gif"
            >
    


        <!-- Posts container -->
        <div v-if="!isLoading" class="posts-content-container">
            <!-- Post -->
            <div v-for="(event, index) in publicEvents" :key="index" class="post-container">
                <div class="post-image-container">

                </div>

                <div class="post-icon-container">
                    <p class="icon">
                        {{event.icon}}
                    </p>
                </div>
                <div class="post-details-container">
                    <div class="post-title-container">
                        <h3>
                            {{event.event_title}}
                        </h3>
                    </div>
                    <p class="post-description">
                        Static website for the coming Fest Application made by the best PG group!
                    </p>
                </div>

            </div>
        </div>

        <!-- Posts container -->
        <div class="posts-content-container">
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
            <!-- Post -->
            <div class="post-container">
                <div class="post-image-container">

                </div>

                <div class="post-icon-container">
                    <p>
                        &#127928;
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
</template>


<style scoped>
@import "@/styles/DashboardStyles.css";
</style>

<script src="../logic/DashboardLogic.js">
</script>

