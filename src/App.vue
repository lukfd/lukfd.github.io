<script setup>
import AppNavbar from './components/Navigation/AppNavbar.vue'
</script>

<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="q-py-sm">
      <AppNavbar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
