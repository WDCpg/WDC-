<script setup>
import Event from "@/components/Event.vue"
import { defineProps } from "vue";

const props = defineProps({
  event_id: String
})

</script>

<template>
  <main>
    <Event :event_id="event_id" :id="event_id" />
  </main>
</template>