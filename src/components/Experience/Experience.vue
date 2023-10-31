<script setup></script>

<template>
  <q-page
    class="row justify-center items-center q-pa-lg"
  >
    <div class="self-center q-px-lg">
      <h2 class="text-center">My experiences</h2>
      <q-timeline
        layout="comfortable"
        side="right"
        color="secondary"
        class="q-pa-xl"
      >
        <q-timeline-entry
          title="NISC, System Specialist"
          subtitle="July 2021 - present"
          side="right"
        >
          <div>
            Maintained on premise
            <b>Linux servers, Oracle, Postgres databases</b> used by iVue
            software owned by hundreds of enterprises. Designed and created
            <b>Vue front-end applications</b>. Provisioned
            <b>new cloud based applications on AWS using Terraform</b>.
            Automated software builds utilizing Apache Ant, Git and Atlassian's
            Bamboo for continuous delivery pipelines.
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="University of St. Thomas, Web Developer"
          subtitle="September 2020 - June 2021"
          side="right"
        >
          <div>
            Coded restful server api using JavaScript, wrote documentation and
            deployed two web applications using Amazon AWS that have reach
            hundreds of visitors. Demonstrated strong communication skills
            explaining technical details to St. Thomas professors.
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="University of St. Thomas, Researcher"
          subtitle="May 2020 - July 2020"
          side="right"
        >
          <div>
            Collaborated in a team for developing front and back end of a web
            application used by hundreds of student for code testing and code
            grading using Vue.js, Express and SQLite.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<style scoped></style>
