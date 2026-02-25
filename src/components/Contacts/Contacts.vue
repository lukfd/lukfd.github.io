<template>
    <div class="q-pa-lg">
        <div class="column items-center">
            <h2>Contacts</h2>
            
            <div class="q-gutter-sm">
                <q-btn
                    :href="'mailto:' + config.email"
                    :label="config.email"
                    flat 
                    icon="email"
                />
                <q-btn
                    :href="config.linkedInUrl"
                    label="linkedin.com/in/luca.comba"
                    icon="fa-brands fa-linkedin"
                    flat
                />
                <q-btn
                    :href="config.githubUrl"
                    label="github.com/lukfd"
                    icon="fa-brands fa-github"
                    flat
                />
            </div>

            <div class="q-pt-xl">
                <q-btn
                    :href="config.resumeUrl"
                    target="_blank"
                    outline
                    color="primary"
                    icon="download"
                    label="Read My Resume"
                />
            </div>

            <div class="q-pt-xl text-center full-width">
                <h4>Thank you for your time!</h4>
                <p>I also enjoy photography. Here are some of my pictures.</p>
                <div class="row q-col-gutter-md q-py-lg">
                    <div class="col-12 col-md-4">
                        <q-img src="/photos/seattle.jpg" class="image-container" />
                    </div>
                    <div class="col-12 col-md-4">
                        <q-img src="/photos/duluth.jpg" class="image-container" />
                    </div>
                    <div class="col-12 col-md-4">
                        <q-img src="/photos/minneapolis.jpg" class="image-container" />
                    </div>
                </div>
            </div>
                
            <div class="q-pt-xl text-center">
                <q-btn
                    :href="config.instagramUrl"
                    label="@luca.motionpicture"
                    icon="fa-brands fa-instagram"
                    flat
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { config } from '@/config.js'
</script>

<style scoped>
.q-img {
    border-radius: 8px;
}

.image-container {
    height: 400px;
}

.row {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
