<script setup>
const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer')
}
</script>

<template>
  <q-page class="row justify-center items-center q-pa-lg">
    <div class="self-center q-px-lg q-py-md">
      <h2>Research</h2>
      <div class="col">
        <q-list>
          <q-item>
            <q-item-section>
              <div class="text-h6">
                Streamflow Recession of the Red River
              </div>
              <div class="text-body2">
                Impacts of seasonally frozen ground on streamflow recession in
                the Red River of the North Basin. Statistical analyses revealed
                that the antecedent winter soil temperature and snowpack control
                the seasonal dynamics of hydrograph recession.
                <a href="https://doi.org/10.1002/rra.4025">
                  https://doi.org/10.1002/rra.4025
                </a>
              </div>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="text-h6">
                What affects Android apps rating?
              </div>
              <div class="text-body2">
                Do paid apps have higher ratings versus free apps, and do apps
                with higher ratings have higher downloads? The end goal is to
                create a model to give content creators the ability to predict
                the rating of their app in the Google Play Store based on our
                variables.
                <a href="/research/GooglePlayStoreApps.pdf">Read the pdf</a>
              </div>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="text-h6">Do Logo impact revenues?</div>
              <div class="text-body2">
                This research will study how companies logo could have an impact
                on their revenues or profit.
                <a href="/research/logorev.html">Read the research</a>
              </div>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="text-h6">
                Do PC gamers prefer playing free games?
              </div>
              <div class="text-body2">
                Are better games free to play or a is just a marketing strategy?
                <a href="/research/pc_gamers.html">Read the research</a>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
a {
  color: #1F7A8C;
  text-decoration: none; /* no underline */
}
</style>
