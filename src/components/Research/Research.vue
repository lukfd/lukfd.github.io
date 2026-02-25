<template>
  <div class="q-pa-lg">
    <div class="column items-center">
      <h2>Research</h2>

      <div class="q-pt-md" style="max-width: 800px">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <div class="text-h6">Predict Restaurant Ratings</div>
                <div class="text-body2">
                  Utilizing the Yelp Open Dataset with over <b>6 million reviews</b> and <b>200,100 images</b> from 150,000 businesses to predict restaurant ratings. Leveraging <b>CLIP (Contrastive Language–Image Pre-training)</b>, a neural network trained on image-text pairs, for zero-shot classification combining user reviews, photos, and business attributes.
                  <q-btn
                    href="https://github.com/lukfd/restaurant-discovery-models"
                    label="github.com/lukfd/restaurant-discovery-models"
                    flat
                    color="primary"
                    target="_blank"
                  />
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <div class="text-h6">Streamflow Recession of the Red River</div>
                <div class="text-body2">
                  Impacts of seasonally frozen ground on streamflow recession in
                  the Red River of the North Basin. Statistical analyses
                  revealed that the antecedent winter soil temperature and
                  snowpack control the seasonal dynamics of hydrograph
                  recession.
                  <q-btn
                    href="https://doi.org/10.1002/rra.4025"
                    label="River Research and Applications, 38(7), 1277–1284"
                    flat
                    color="primary"
                    target="_blank"
                  />
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <div class="text-h6">Machine Learning for predicting car crashes comprehensive costs</div>
                <div class="text-body2">
                  Researched and developed accurate Machine Learning models for
                  the prediction of comprehensive car accident costs from
                  Austin's Vision Zero.
                  
                  <q-btn
                    href="https://www.github.com/lukfd/city-of-austin-car-crash-ml-study"
                    label="github.com/lukfd/city-of-austin-car-crash-ml-study"
                    flat
                    color="primary"
                    target="_blank"
                  />
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <div class="text-h6">What affects Android apps rating?</div>
                <div class="text-body2">
                  Do paid apps have higher ratings versus free apps, and do apps
                  with higher ratings have higher downloads? The end goal is to
                  create a model to give content creators the ability to predict
                  the rating of their app in the Google Play Store based on our
                  variables.
                  <q-btn
                    href="/research/GooglePlayStoreApps.pdf"
                    label="Read the PDF"
                    flat
                    color="primary"
                    target="_blank"
                  />
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <div class="text-h6">Do Logos impact revenues?</div>
                <div class="text-body2">
                  This research will study how companies' logos could have an
                  impact on their revenues or profit.
                  <q-btn
                    href="/research/logorev.html"
                    label="Read the Research"
                    flat
                    color="primary"
                    target="_blank"
                  />
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <div class="text-h6">
                  Do PC gamers prefer playing free games?
                </div>
                <div class="text-body2">
                  Are better games free to play or is it just a marketing
                  strategy?
                  <q-btn
                    href="/research/pc_gamers.html"
                    label="Read the Research"
                    flat
                    color="primary"
                    target="_blank"
                  />
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<style scoped>
.q-btn {
  padding: 0;
  min-height: unset;
  line-height: inherit;
}

.q-list {
  width: 100%;
}

.text-body2 {
  margin-top: 8px;
}
</style>
