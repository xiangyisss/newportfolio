<template>
    <div class="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 class="mt-4 mb-5">Projects</h1>
        <div class="project-wrapper d-flex flex-wrap justify-content-between align-items-stretch">

            <div class="project">
                <img class="img-fluid" src="../../assets/reading-tree.PNG" alt="">
                <h4>Love reading</h4>
                <div class=" description-box">

                    <p>A CRUD full stack Project for share most memoriable books, recommendations,
                        reviews to find and read more books
                    </p>
                </div>
                <a href="https://github.com/xiangyisss/lovereading">Click here to check code</a>
                <p>Stack: Vue, TypeScript, Laravel, Sql, BootStrap</p>
            </div>

            <div class="project">
                <img class="img-fluid"  src="../../assets/recipes-site.PNG" alt="">
                <h4>Today's Recipes</h4>
                <div class="description-box">

                    <p>Project for those that run out of ideas when cooking.
                        Select what type of food you would like to eat and get ready
                        for some delicious food.
                    </p>
                </div>
                <a href="https://todays-recipes.netlify.app">Website overview</a>
                <p>Stack: Vue, TypeScript</p>
            </div>

            <div class="project">
                <img class="img-fluid"  src="../../assets/web-chat.PNG" alt="">
                <h4>Real time chat App</h4>
                <div class="description-box">

                    <p>Project to help people connect and share ideas. Drop by and
                        share some thoughts with strangers.
                    </p>
                </div>
                <a href="https://realtime-webchat-publicchannel.netlify.app">Website overview</a>
                <p>Stack: Vue, Vuex</p>
            </div>
        </div>
        <a href="https://github.com/xiangyisss">Check out more projects</a>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container-fluid {
	background-color: #eee6e6a6;
}


a {
    color: #73c7f5;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 1.5rem;
    text-decoration: none;
}
.project-wrapper {
    width: 90%;
}
.project {
    width: 30%;
    margin-bottom: 1.5rem;
}
.project > * {
    margin-bottom: 1.5rem;
}
.description-box {
    min-height: 80px;
}
h4 {
    font-weight: 500;
}
@media ( max-width: 1100px ) {
    .project-wrapper {
        flex-direction: column;
        align-items: center !important;
    }
    .project{
        width: 90%;
    }
    .description-box {
    min-height: 4rem;
}
}
</style>