<template>
    <div class="container-sm min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <h1 > <span>About</span> Me</h1>
        <div class="wrapper d-flex justify-content-between align-items-center flex-wrap">
            <div class="img-wrapper">
                <img src="../../../public/my-photo.png" alt="">
            </div>

            <div class="info-wrapper">
                <h2 class="mb-4">A curiosity-driven Front-End Developer.</h2>
                <ul>
                    <li>
                        I'm happy when I'm creating, implementing, learning, thinking about how to make things better.
                    </li>
                    <li>
                        I'm passionate about turning a simple idea into a beautiful design, to then be a functional application.
                    </li>
                    <li class="strong">
                        I'm a quick learner, so What I lack in experience I will make up with speed!
                    </li>
                </ul>
                <div class="skill-wrapper">

                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
span {
    color: #73c7f5;
}
.img-wrapper {
    width: 30%;
}
img {
    width: 100%;
    height: auto;
}

.info-wrapper {
    width: 60%;
}

h1 {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
}

ul {
    list-style-type: none;
    padding-left: 0 !important;
}

ul > * {
    margin-bottom: 1rem;
}
.strong {
    font-weight: 600;
}

@media (max-width: 800px) {
    .wrapper {
        flex-direction: column;
    }
    .img-wrapper {
        width: 50%;
    }
    .info-wrapper {
        width: 90%;
    }
    img {
        margin-bottom: 1.5rem;
    }
}
</style>