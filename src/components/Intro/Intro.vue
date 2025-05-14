<template>
    <div class="q-pa-lg">
        <div class="row items-center justify-center q-col-gutter-xl">
            <div class="col-12 col-md-6 text-center">
                <h2>Hello! I'm Luca</h2>
                
                <div class="text-body1 q-pt-md">
                    <p>
                        <b>Computer Science</b> and <b>Applied Statistics</b> graduate from the
                        <i>University of St. Thomas</i>.
                    </p>
                    <p>
                        <b>Sr. System Specialist</b> at
                        <i>National Information Solutions Cooperative</i> (NISC). I enjoy
                        developing Web and Cloud Applications.
                    </p>
                    <p>
                        I am currently pursuing a Master degree in Artificial Intelligence at
                        the <i>University of St. Thomas</i>.
                    </p>
                </div>

                <div class="q-pt-xl">
                    <q-btn
                        href="/documents/LucaCombaResume.pdf"
                        target="_blank"
                        outline
                        color="primary"
                        label="Read My Resume"
                        class="q-mr-sm"
                    />
                    <q-btn
                        href="https://www.blog.lucacomba.com/"
                        target="_blank"
                        flat
                        color="primary"
                        label="Blog"
                    />
                </div>
            </div>

            <div class="col-12 col-md-4 text-center">
                <q-img
                    src="/photos/me4.jpg"
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
