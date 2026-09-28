<template>
  <q-page>
    <Intro id="Intro" />
    <Experience id="Experience" />
    <Skills id="Skills" />
    <Projects id="Projects" />
    <Research id="Research" />
    <Contacts id="Contacts" />
    <q-space class="q-pa-xl" />
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Contacts from './Contacts/Contacts.vue'
import Intro from './Intro/Intro.vue'
import Skills from './Skills/Skills.vue'
import Experience from './Experience/Experience.vue'
import Projects from './Projects/Projects.vue'
import Research from './Research/Research.vue'

const route = useRoute()

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      const element = document.querySelector(route.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }
})
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
  text-decoration: none;
}
</style>
