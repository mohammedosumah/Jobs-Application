<script setup lang="ts">
  import AppNavbar from './components/AppNavbar.vue'
  import Hero from './components/AppHero.vue'
  import HomeCards from './components/HomeCards.vue'
  import JobListings from './components/JobListings.vue';
</script>

<template>
  <AppNavbar />
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>

<style scoped>

</style>
