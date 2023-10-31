<script setup>
import Contacts from './Contacts/Contacts.vue'
import Intro from './Intro/Intro.vue'
import Experience from './Experience/Experience.vue'
import Projects from './Projects/Projects.vue'
import Research from './Research/Research.vue'
</script>

<template>
  <q-layout
    view="lHh lpr lFf"
    container
    class="window-height window-width shadow-2 rounded-borders"
  >
    <q-header reveal elevated class="q-py-md">
      <q-toolbar>
        <q-toolbar-title><a href="/">Luca Comba</a></q-toolbar-title>
        <q-breadcrumbs
          active-color="white"
          style="font-size: 16px"
          class="q-px-xl"
        >
          <a href="#Intro" class="q-px-sm">
            <q-breadcrumbs-el label="Home" icon="home" />
          </a>
          <a href="#Experience" class="q-px-sm">
            <q-breadcrumbs-el label="Experience" icon="fa-solid fa-book" />
          </a>
          <a href="#Projects" class="q-px-sm">
            <q-breadcrumbs-el label="Projects" icon="fa-solid fa-computer" />
          </a>
        </q-breadcrumbs>
        <div class="q-px-xl">
          <a href="https://www.linkedin.com/in/luca-comba-29000764/"
            ><q-btn flat round dense icon="fa-brands fa-linkedin"
          /></a>
          <a href="https://github.com/lukfd/"
            ><q-btn flat round dense icon="fa-brands fa-github"
          /></a>
          <a href="https://www.youtube.com/channel/UCzITfhQ11v_73eBJTJY41pA"
            ><q-btn flat round dense icon="fa-brands fa-youtube"
          /></a>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <Intro id="Intro" />
      <Experience
        id="Experience"
        v-motion-fade-visible-once
        :delay="500"
      />
      <Projects
        id="Projects"
        v-motion-fade-visible-once
        :delay="500"
      />
      <Research
        id="Research"
        v-motion-fade-visible-once
        :delay="500"
      />
      <Contacts
        id="Contacts"
      />
      <q-space class="q-pa-xl" />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none; /* no underline */
}
</style>
