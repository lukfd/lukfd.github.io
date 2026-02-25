<script setup>
import { config } from '@/config.js'
</script>

<template>
    <div class="q-pa-lg">
        <div class="row items-center justify-center q-col-gutter-xl">
            <div class="col-12 col-md-6 text-center">
                <h2>Hello! I'm Luca Comba</h2>
                
                <div class="text-body1 q-pt-md">
                    <p>
                        <b>Computer Science</b>, <b>Applied Statistics</b> and <b>Artificial Intelligence</b> graduate from the
                        <i>University of St. Thomas</i>.
                    </p>
                    <p>
                        <b>Sr. Systems Specialist</b> at
                        <i>National Information Solutions Cooperative</i> (NISC). I enjoy
                        developing Web and Cloud Applications.
                    </p>
                </div>

                <div class="q-pt-xl">
                    <q-btn
                        :href="config.resumeUrl"
                        target="_blank"
                        outline
                        color="primary"
                        label="Read My Resume"
                        class="q-mr-sm"
                    />
                    <q-btn
                        :href="config.blogUrl"
                        target="_blank"
                        flat
                        color="primary"
                        label="Blog"
                    />
                </div>
            </div>

            <div class="col-12 col-md-4 text-center">
                <q-img
                    src="/photos/me7.jpg"
                    class="profile-image"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-image {
    border-radius: 8px;
    width: 300px;
    height: 300px;
}
</style>
