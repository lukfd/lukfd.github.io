<template>
  <div class="q-pa-lg">
    <div class="column items-center">
      <h2>My experiences</h2>

      <div class="q-pt-md" style="max-width: 800px">
        <q-timeline layout="comfortable" side="right" color="secondary">
          <q-timeline-entry
            title="Master Graduate Program in Artificial Intelligence"
            subtitle="May 2024 - Present"
            side="right"
          >
            <div>
              Pursuing a Master Degree in Artificial Intelligence at the
              University of St. Thomas.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="NISC, Sr. Systems Specialist"
            subtitle="July 2021 - Present"
            side="right"
          >
            <div>
              <ul>
                <li>
                  Architected and deployed scalable backend services using <b>FastAPI</b> and <b>Airflow</b>, leveraging <b>Boto3</b> to automate <b>AWS</b> infrastructure provisioning for cooperatives supporting over <b>1M national users</b>.
                </li>
                <li>
                  Developed a custom <b>Cobra CLI</b> and <b>Vue</b> interface to streamline maintenance and patching for <i>hybrid (on-prem/cloud) environments</i> via <b>AWS Systems Manager</b>, significantly reducing manual intervention.
                </li>
                <li>
                  Standardized <b>Infrastructure-as-Code (IaC)</b> utilizing <b>Terraform</b> and <b>Bamboo</b>; integrated <b>UV</b> and <b>Goreleaser</b> into <b>CI/CD</b> pipelines to automate releases, reclaiming <b>80+ engineering hours annually</b>.
                </li>
              </ul>
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="AWS Cloud Practitioner Certificate"
            subtitle="May 2023"
            icon="fa-brands fa-aws"
            side="right"
          >
            <div>ID: 8E6TY3TK9E44QV98</div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Bachelor Of Science in Computer Science and Applied Statistcs"
            subtitle="May 2021"
            icon="fa-solid fa-graduation-cap"
            side="right"
          >
            <div>
              Graduated from the University of St. Thomas, St. Paul, Minnesota.
              GPA 3.65.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="University of St. Thomas, Web Developer"
            subtitle="September 2020 - June 2021"
            side="right"
          >
            <div>
              Developed a <b>RESTful API</b> using JavaScript. Successfully
              deployed an interactive map web application and a static website
              on Amazon AWS, attracting hundreds of visitors. Exhibited
              <b>strong communication skills</b> by effectively conveying
              technical concepts to professors at the University of St. Thomas.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="University of St. Thomas, Researcher"
            subtitle="May 2020 - July 2020"
            side="right"
          >
            <div>
              Collaborated with a team to develop both the front-end and
              back-end of a <b>web-based platform</b>, utilized by hundreds of
              students for code testing and automated grading.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.q-timeline {
  width: 100%;
}
</style>
