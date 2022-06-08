<template>
    <div class = "calendar_container">
        <div class="calendar_header">
            <div class = "calendar_header_title">
                <h1>Calendar</h1>
            </div>
            <div class = "google_cal_button">
                <button type="button" class="add-admin-button">Sync Google Calendar</button>
            </div>
        </div>
        <div class="calendar">
            <div class = "calendar_mod">
                <div class="calendar_mod_banner">
                    <h2>Manage Your Calendar</h2>
                    <button @click="selectedDate = new Date()">TODAY'S DATE</button>
                </div>
                <vue-cal ref="vuecal"
                xsmall
                hide-weekends
                :disable-views="['years']"
                :time="false"
                today-button
                active-view="month"
                style="height: 500px"
                :selected-date="selectedDate"
                :events="events">
  <!-- Optional slot for the custom button. -->
                <template v-slot:today-button>
    <!-- Using Vuetify -->
                <v-tooltip>
                <template v-slot:activator="{ on }">
                <v-btn v-on="on">
                <v-icon>my_location</v-icon>
                </v-btn>
                <span>Go to Today's date</span>
                </template>
                </v-tooltip>
                </template>
                </vue-cal>


            </div>
        </div>
        <div>

        </div>
    </div>
</template>
<script src="@/logic/CalendarLogic.js">
</script>
<style scoped>
@import "@/styles/CalendarStyles.css";
</style>
