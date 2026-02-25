<template>
  <div class="q-pa-lg bg-grey-1">
    <div class="column items-center">
      <h2>Skills & Technologies</h2>

      <div class="q-pt-md" style="max-width: 1000px">
        <div class="row q-col-gutter-md">
          <!-- Languages -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 text-primary">
                  <q-icon name="code" /> Languages
                </div>
                <div class="q-pt-sm q-gutter-sm">
                  <q-chip color="primary" text-color="white">Python</q-chip>
                  <q-chip color="primary" text-color="white">JavaScript</q-chip>
                  <q-chip color="primary" text-color="white">TypeScript</q-chip>
                  <q-chip color="primary" text-color="white">Go</q-chip>
                  <q-chip color="primary" text-color="white">SQL</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Frontend -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 text-primary">
                  <q-icon name="web" /> Frontend
                </div>
                <div class="q-pt-sm q-gutter-sm">
                  <q-chip color="secondary" text-color="white">Vue.js</q-chip>
                  <q-chip color="secondary" text-color="white">React</q-chip>
                  <q-chip color="secondary" text-color="white">React Native</q-chip>
                  <q-chip color="secondary" text-color="white">Quasar</q-chip>
                  <q-chip color="secondary" text-color="white">PrimeVue</q-chip>
                  <q-chip color="secondary" text-color="white">Tailwind CSS</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Backend -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 text-primary">
                  <q-icon name="dns" /> Backend
                </div>
                <div class="q-pt-sm q-gutter-sm">
                  <q-chip color="accent" text-color="white">FastAPI</q-chip>
                  <q-chip color="accent" text-color="white">Node.js</q-chip>
                  <q-chip color="accent" text-color="white">Flask</q-chip>
                  <q-chip color="accent" text-color="white">Express.js</q-chip>
                  <q-chip color="accent" text-color="white">Golang</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Databases -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 text-primary">
                  <q-icon name="storage" /> Data Science
                </div>
                <div class="q-pt-sm q-gutter-sm">
                  <q-chip color="red" text-color="white">PostgreSQL</q-chip>
                  <q-chip color="red" text-color="white">Redis</q-chip>
                  <q-chip color="red" text-color="white">DynamoDB</q-chip>
                  <q-chip color="red" text-color="white">Neo4j</q-chip>
                  <q-chip color="red" text-color="white">SQL</q-chip>
                  <q-chip color="red" text-color="white">Airflow</q-chip>
                  <q-chip color="red" text-color="white">Databricks</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Cloud & DevOps -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 text-primary">
                  <q-icon name="cloud" /> Cloud & DevOps
                </div>
                <div class="q-pt-sm q-gutter-sm">
                  <q-chip color="blue" text-color="white">AWS</q-chip>
                  <q-chip color="blue" text-color="white">Google Cloud</q-chip>
                  <q-chip color="blue" text-color="white">Docker</q-chip>
                  <q-chip color="blue" text-color="white">Terraform</q-chip>
                  <q-chip color="blue" text-color="white">CI/CD</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Tools & Other -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 text-primary">
                  <q-icon name="build" /> Tools & Other
                </div>
                <div class="q-pt-sm q-gutter-sm">
                  <q-chip color="grey-7" text-color="white">Git</q-chip>
                  <q-chip color="grey-7" text-color="white">BitBucket</q-chip>
                  <q-chip color="grey-7" text-color="white">Boto3</q-chip>
                  <q-chip color="grey-7" text-color="white">AWS Systems Manager</q-chip>
                  <q-chip color="grey-7" text-color="white">RESTful APIs</q-chip>
                  <q-chip color="grey-7" text-color="white">Machine Learning</q-chip>
                  <q-chip color="grey-7" text-color="white">Artificial Intelligence</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.q-chip {
  margin: 4px;
}
</style>
