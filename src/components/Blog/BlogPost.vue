<template>
  <q-page class="post-container q-py-xl q-px-md">
    <div v-if="post">
      <!-- Back Link -->
      <div class="q-mb-xl">
        <router-link to="/blog" class="back-link">
          &larr; Back to Blog
        </router-link>
      </div>

      <!-- Post Header -->
      <header class="q-mb-xl">
        <div class="post-date q-mb-sm">
          {{ formatDate(post.date) }}
        </div>
        <h1 class="text-h3 text-weight-bold post-title q-my-none">
          {{ post.title }}
        </h1>
      </header>

      <!-- Markdown Body -->
      <main class="markdown-body" v-html="post.html"></main>

      <!-- Bottom Navigation -->
      <footer class="q-mt-xl q-pt-lg post-footer">
        <router-link to="/blog" class="back-link">
          &larr; Back to Blog
        </router-link>
      </footer>
    </div>

    <!-- 404 Post Not Found State -->
    <div v-else class="text-center q-py-xl">
      <h2 class="text-h4 text-weight-bold not-found-title q-mb-sm">Post Not Found</h2>
      <p class="text-subtitle1 not-found-text q-mb-lg">
        The article you are looking for doesn't exist.
      </p>
      <router-link to="/blog" class="back-link">
        &larr; Back to Blog
      </router-link>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '@/utils/posts.js'

const route = useRoute()
const post = computed(() => getPostBySlug(route.params.slug))

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
.post-container {
  max-width: 760px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
}

.post-title {
  color: var(--q-primary, #035e7b);
  line-height: 1.25;
}

.post-date {
  color: #6b7280;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}

.back-link {
  color: var(--q-primary, #035e7b);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--q-secondary, #499167);
  text-decoration: underline;
}

.post-footer {
  border-top: 1px solid #e5e7eb;
}

.not-found-title {
  color: var(--q-primary, #035e7b);
}

.not-found-text {
  color: #6b7280;
}
</style>
