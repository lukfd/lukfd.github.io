<template>
  <q-toolbar class="q-px-md">
    <q-toolbar-title>
      <router-link to="/" class="nav-brand">
        Luca Comba
      </router-link>
    </q-toolbar-title>

    <!-- Desktop Navigation -->
    <div class="gt-sm row items-center q-gutter-x-xs q-mr-md">
      <q-btn
        flat
        label="Home"
        @click="handleNav('Intro')"
        :class="{ 'active-nav': isHomeActive }"
      />
      <q-btn
        flat
        label="Experience"
        @click="handleNav('Experience')"
      />
      <q-btn
        flat
        label="Projects"
        @click="handleNav('Projects')"
      />
      <q-btn
        flat
        label="Blog"
        to="/blog"
        :class="{ 'active-nav': isBlogActive }"
      />
    </div>

    <!-- Social Links (Desktop & Tablet) -->
    <div class="gt-xs row items-center q-gutter-x-xs">
      <q-btn
        :href="config.linkedInUrl"
        target="_blank"
        flat
        round
        dense
        icon="fa-brands fa-linkedin"
      >
        <q-tooltip>LinkedIn</q-tooltip>
      </q-btn>
      <q-btn
        :href="config.githubUrl"
        target="_blank"
        flat
        round
        dense
        icon="fa-brands fa-github"
      >
        <q-tooltip>GitHub</q-tooltip>
      </q-btn>
      <q-btn
        :href="config.youtubeUrl"
        target="_blank"
        flat
        round
        dense
        icon="fa-brands fa-youtube"
      >
        <q-tooltip>YouTube</q-tooltip>
      </q-btn>
      <q-btn
        :href="'mailto:' + config.email"
        flat
        round
        dense
        icon="fa-solid fa-envelope"
      >
        <q-tooltip>Email</q-tooltip>
      </q-btn>
    </div>

    <!-- Mobile Menu Button -->
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      class="lt-md q-ml-sm"
      @click="mobileMenuOpen = !mobileMenuOpen"
    />

    <!-- Mobile Dialog / Menu -->
    <q-dialog v-model="mobileMenuOpen" position="top">
      <q-card class="bg-primary text-white full-width q-pa-md">
        <q-list>
          <q-item clickable v-ripple @click="handleNav('Intro'); mobileMenuOpen = false">
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleNav('Experience'); mobileMenuOpen = false">
            <q-item-section avatar><q-icon name="fa-solid fa-briefcase" /></q-item-section>
            <q-item-section>Experience</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="handleNav('Projects'); mobileMenuOpen = false">
            <q-item-section avatar><q-icon name="fa-solid fa-computer" /></q-item-section>
            <q-item-section>Projects</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/blog" @click="mobileMenuOpen = false">
            <q-item-section avatar><q-icon name="fa-solid fa-pen" /></q-item-section>
            <q-item-section>Blog</q-item-section>
          </q-item>
        </q-list>

        <q-separator color="white" class="q-my-sm" />

        <div class="row justify-around q-pt-sm">
          <q-btn :href="config.linkedInUrl" target="_blank" flat round icon="fa-brands fa-linkedin" />
          <q-btn :href="config.githubUrl" target="_blank" flat round icon="fa-brands fa-github" />
          <q-btn :href="config.youtubeUrl" target="_blank" flat round icon="fa-brands fa-youtube" />
          <q-btn :href="'mailto:' + config.email" flat round icon="fa-solid fa-envelope" />
        </div>
      </q-card>
    </q-dialog>
  </q-toolbar>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { config } from '@/config.js'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)

const isHomeActive = computed(() => route.path === '/' && (!route.hash || route.hash === '#Intro'))
const isBlogActive = computed(() => route.path.startsWith('/blog'))

function handleNav(sectionId) {
  if (route.path === '/') {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push({ path: '/', hash: `#${sectionId}` })
  }
}
</script>

<style scoped>
.nav-brand {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  transition: opacity 0.2s ease;
}

.nav-brand:hover {
  opacity: 0.85;
}

.active-nav {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
}
</style>
