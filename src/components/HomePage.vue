<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="q-py-sm">
      <q-toolbar>
        <q-toolbar-title>
          <a href="/" flat> Luca Comba </a>
        </q-toolbar-title>
        <q-breadcrumbs class="q-px-xl">
          <q-btn flat icon="home" label="Home" @click="scrollTo('Intro')" />
          <q-btn
            flat
            icon="fa-solid fa-briefcase"
            label="Experience"
            @click="scrollTo('Experience')"
          />
          <q-btn
            flat
            icon="fa-solid fa-computer"
            label="Projects"
            @click="scrollTo('Projects')"
          />
          <q-btn
            href="https://www.blog.lucacomba.com/"
            target="_blank"
            label="Blog"
            icon="fa-solid fa-pen"
          />
        </q-breadcrumbs>
        <q-btn
          href="https://www.linkedin.com/in/luca-comba-29000764/"
          flat
          round
          dense
          icon="fa-brands fa-linkedin"
        />
        <q-btn
          href="https://github.com/lukfd/"
          flat
          round
          dense
          icon="fa-brands fa-github"
        />
        <q-btn
          href="https://www.youtube.com/channel/UCzITfhQ11v_73eBJTJY41pA"
          flat
          round
          dense
          icon="fa-brands fa-youtube"
        />
        <q-btn
          href="mailto:luca.comba98@gmail.com"
          flat
          round
          dense
          icon="fa-solid fa-envelope"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <Intro id="Intro" />
        <Experience id="Experience" />
        <Projects id="Projects" />
        <Research id="Research" />
        <Contacts id="Contacts" />
        <q-space class="q-pa-xl" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Contacts from './Contacts/Contacts.vue'
import Intro from './Intro/Intro.vue'
import Experience from './Experience/Experience.vue'
import Projects from './Projects/Projects.vue'
import Research from './Research/Research.vue'

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
a {
  color: white; /* Set your desired color */
  text-decoration: none; /* Remove underline */
}

a:hover {
  color: white; /* Optional: Set hover color */
  text-decoration: none; /* Optional: Add underline on hover */
}
</style>
