<template>
  <div class="q-pa-lg">
    <div class="column items-center">
      <h2>Projects</h2>

      <div class="q-pt-md projects-list-container">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-item q-py-md"
        >
          <!-- Title & Badges Header Row -->
          <div class="row items-center justify-between q-gutter-y-xs">
            <a
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              class="project-title row items-center no-wrap"
            >
              <span>{{ project.title }}</span>
              <q-icon name="open_in_new" size="15px" class="q-ml-xs link-icon" />
            </a>

            <div class="row q-gutter-xs">
              <q-badge
                v-for="(badge, bIndex) in project.badges"
                :key="bIndex"
                outline
                :color="badge.color || 'secondary'"
                :label="badge.label"
                class="tech-badge"
              />
            </div>
          </div>

          <!-- Description -->
          <p v-if="project.description" class="project-description q-mt-xs q-mb-none">
            {{ project.description }}
          </p>

          <!-- Award / Highlight Note -->
          <div v-if="project.note" class="award-note q-mt-xs">
            <q-icon name="emoji_events" size="15px" class="q-mr-xs text-amber-8" />
            <span v-html="project.note"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "HomeLenz",
    href: "https://www.homelenz.techypond.com",
    description: "Search and data tool for the real estate market.",
    badges: [
      { label: "Nuxt", color: "primary" },
      { label: "Postgres - PostGIS", color: "secondary" },
      { label: "Google Cloud", color: "secondary" }
    ]
  },
  {
    title: "CampLLM",
    href: "https://www.campllm.techypond.com",
    description: "Minnesota State Park finder using Retrieval-Augmented Generation (RAG).",
    badges: [
      { label: "Chroma Vector DB", color: "primary" },
      { label: "AI", color: "primary" },
      { label: "PostGIS", color: "secondary" }
    ]
  },
  {
    title: "Routes for Good",
    href: "https://routes-for-good.lovable.app",
    description: "Platform optimizing food distribution among students in need.",
    badges: [
      { label: "React", color: "secondary" },
      { label: "Lovable", color: "primary" }
    ],
    note: 'Winner of the <a href="https://tommie-buildfest.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Recently+ended" target="_blank">Tommie Build Fest</a> hackathon'
  },
  {
    title: "Tommie Idea Board",
    href: "https://www.tommies.techypond.com",
    description: "Platform for university students to share, validate, and collaborate on startup ideas.",
    badges: [
      { label: "Docker", color: "primary" },
      { label: "Go", color: "primary" },
      { label: "Vue", color: "secondary" },
      { label: "Redis", color: "secondary" }
    ]
  },
  {
    title: "Skaffale",
    href: "https://github.com/lukfd/skaffale",
    description: "Community hub to share and discover emerging libraries for AI and Machine Learning.",
    badges: [
      { label: "Docker", color: "primary" },
      { label: "Node.js", color: "secondary" },
      { label: "Vue 3", color: "secondary" },
      { label: "Postgres", color: "primary" }
    ]
  },
  {
    title: "Trinkapp",
    href: "https://wwww.trinkapp.techypond.com",
    description: "Cross-platform mobile gaming application developed with React Native.",
    badges: [
      { label: "Docker", color: "primary" },
      { label: "React Native", color: "secondary" }
    ]
  },
  {
    title: "Muichiro MC",
    href: "https://github.com/smantic-labs/website",
    description: "Decentralized integration bridging Minecraft servers with Ethereum smart contracts.",
    badges: [
      { label: "React", color: "secondary" },
      { label: "Web3", color: "primary" }
    ]
  },
  {
    title: "Farmers Elevator",
    href: "https://github.com/lukfd/farmerselevator",
    description: "Agricultural logistics and management platform connecting local farmers with grain elevators.",
    badges: [
      { label: "Python", color: "primary" },
      { label: "Flask", color: "secondary" }
    ]
  },
  {
    title: "CS Department Autograder",
    href: "https://submit.cs.stthomas.edu/",
    description: "Automated code execution and grading system for computer science coursework.",
    badges: [
      { label: "Node.js", color: "secondary" },
      { label: "Vue.js", color: "secondary" }
    ]
  },
  {
    title: "UST Multidepartment Showcase",
    href: "http://croatia.stelarprojects.net/",
    description: "Interdepartmental academic showcase portal at the University of St. Thomas.",
    badges: [
      { label: "Bootstrap", color: "secondary" },
      { label: "jQuery", color: "secondary" }
    ]
  },
  {
    title: "Minnesota Multifaith Network",
    href: "http://mnmnmaps.stelarprojects.net/",
    description: "Interactive geographic visualization mapping cultural and religious institutions statewide.",
    badges: [
      { label: "Vue.js", color: "secondary" },
      { label: "Mapping", color: "primary" }
    ]
  },
  {
    title: "Enpy",
    href: "https://github.com/lukfd/enpy",
    description: "Lightweight open-source Python library converting complex JSON structures to tabular CSV datasets.",
    badges: [
      { label: "Python", color: "primary" },
      { label: "CLI / Library", color: "secondary" }
    ]
  },
  {
    title: "Ferramentacomba.com",
    href: "https://ferramentacomba.com",
    description: "Commercial product catalog and web presence for a retail hardware business.",
    badges: [
      { label: "Vue 3", color: "secondary" },
      { label: "Tailwind", color: "secondary" }
    ]
  }
]
</script>

<style scoped>
.projects-list-container {
  width: 100%;
  max-width: 800px;
}

.project-item {
  border-bottom: 1px solid #e5e7eb;
}

.project-item:last-child {
  border-bottom: none;
}

.project-title {
  color: var(--q-primary, #035e7b);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-title:hover {
  color: var(--q-secondary, #499167);
}

.link-icon {
  opacity: 0.5;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.project-title:hover .link-icon {
  opacity: 1;
  transform: translate(1px, -1px);
}

.project-description {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
}

.award-note {
  font-size: 0.8rem;
  color: #b45309;
  display: flex;
  align-items: center;
}

.award-note :deep(a) {
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
}

.tech-badge {
  font-size: 0.75rem;
  padding: 3px 7px;
  border-radius: 4px;
}
</style>
