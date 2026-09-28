<template>
  <q-page class="blog-container q-py-xl q-px-md">
    <!-- Header with Posts / About Subnav -->
    <div class="row items-center justify-between q-mb-xl">
      <h1 class="text-h3 text-weight-bold blog-heading q-my-none">My Blog</h1>

      <div class="row q-gutter-x-sm items-center">
        <button
          type="button"
          class="subnav-btn"
          :class="{ active: currentTab === 'posts' }"
          @click="setTab('posts')"
        >
          Posts
        </button>
        <button
          type="button"
          class="subnav-btn"
          :class="{ active: currentTab === 'about' }"
          @click="setTab('about')"
        >
          About
        </button>
      </div>
    </div>

    <!-- Posts Tab -->
    <div v-if="currentTab === 'posts'" class="post-list">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="post-item q-mb-xl"
      >
        <div class="post-date q-mb-xs">
          {{ formatDate(post.date) }}
        </div>
        <h2 class="text-h5 text-weight-medium q-my-none">
          <router-link :to="`/blog/${post.slug}`" class="post-title-link">
            {{ post.title }}
          </router-link>
        </h2>
        <p v-if="post.description" class="post-description q-mt-sm q-mb-none">
          {{ post.description }}
        </p>
      </article>
    </div>

    <!-- About Tab (Rendered from Markdown) -->
    <div v-else-if="currentTab === 'about'" class="about-section">
      <div class="markdown-body" v-html="about.html"></div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAllPosts, getAboutContent } from '@/utils/posts.js'

const route = useRoute()
const router = useRouter()
const posts = ref(getAllPosts())
const about = ref(getAboutContent())

const currentTab = ref('posts')

function syncTabFromRoute() {
  if (route.hash === '#about' || route.query.tab === 'about') {
    currentTab.value = 'about'
  } else {
    currentTab.value = 'posts'
  }
}

onMounted(() => {
  syncTabFromRoute()
})

watch(() => route.hash, () => {
  syncTabFromRoute()
})

function setTab(tab) {
  currentTab.value = tab
  if (tab === 'about') {
    router.replace({ path: '/blog', hash: '#about' })
  } else {
    router.replace({ path: '/blog' })
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (e) {
    return dateStr
  }
}
</script>

<style scoped>
.blog-container {
  max-width: 760px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
}

.blog-heading {
  color: var(--q-primary, #035e7b);
  letter-spacing: -0.5px;
}

.subnav-btn {
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  color: #6b7280;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.subnav-btn:hover {
  color: var(--q-primary, #035e7b);
  border-color: var(--q-primary, #035e7b);
}

.subnav-btn.active {
  background: var(--q-primary, #035e7b);
  color: #ffffff;
  border-color: var(--q-primary, #035e7b);
}

.post-item {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
}

.post-item:last-child {
  border-bottom: none;
}

.post-date {
  color: #6b7280;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}

.post-title-link {
  color: #111827;
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-title-link:hover {
  color: var(--q-secondary, #499167);
}

.post-description {
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
}

.about-section {
  padding-top: 0.5rem;
}
</style>
