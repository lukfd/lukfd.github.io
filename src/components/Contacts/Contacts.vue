<script setup>
const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
}
</script>

<template>
  <q-page
    class="window-height window-width row justify-center items-center q-pa-lg"
  >
    <div class="q-px-lg q-py-md">
      <h4>Thank you for your time!</h4>
      <div class="col">
        <p>
          Contact me at
          <a href="mailto:luca.comba98@gmail.com">luca.comba98@gmail.com</a>
        </p>
        <q-btn outline color="secondary" label="Download My Resume" @click="openInNewTab('/documents/LucaCombaResume.pdf')">
          <q-icon flat dense right name="fa-solid fa-download"/>
        </q-btn>
      </div>
    </div>
    <q-img
      src="/photos/DSC06023.jpg"
      class="pictures"
      style="
        z-index: -1;
        position: absolute;
        top: 8%;
        left: 30%;
        max-width: 20%;
        max-height: 100%;
      "
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1, scale: 1 }"
      :delay="500"
      alt=""
    />
    <q-img
      src="/photos/DSC04304.jpg"
      class="pictures"
      style="
        z-index: -3;
        position: absolute;
        top: -5%;
        left: 70%;
        max-width: 25%;
        max-height: 100%;
      "
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1, scale: 1 }"
      :delay="500"
      alt=""
    />
    <q-img
      src="/photos/DSC04055.jpg"
      class="pictures"
      style="
        z-index: -2;
        position: absolute;
        top: 60%;
        left: 65%;
        max-width: 23%;
        max-height: 100%;
      "
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1, scale: 1 }"
      :delay="500"
      alt=""
    />
    <q-img
      src="/photos/DSC02065.jpg"
      class="pictures"
      style="
        z-index: -4;
        position: absolute;
        top: 20%;
        left: 5%;
        max-width: 30%;
        max-height: 100%;
      "
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1, scale: 1 }"
      :delay="500"
      alt=""
    />
  </q-page>
</template>

<style scoped>
.pictures {
  border-radius: 5%;
}
</style>
