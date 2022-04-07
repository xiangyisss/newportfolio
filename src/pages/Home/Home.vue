<template>
    <div class="container-fluid vh-100 d-flex justify-content-center align-items-center" >
        <p>Hello World, I'm Xiang!
        <br>
        I'm a <span class="front-end">Front-End Developer</span>
        <br>
        and <span class="animation"> {{item}} </span>.</p>
        <div class="img-wrapper">
            <img src="../../assets/lotus.png" class="img-fluid" alt="" >
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
    const msgList = [
        'Book worm',
        'Plant lover',
        'Adventurer',
        'Food lover'
    ]
    const item : Ref<string> = ref('Book worm')
    const index : Ref<number> = ref(0);
    onMounted(() =>  {
        setInterval(():void => {
            item.value = msgList[index.value++]
            if(index.value === msgList.length) {
                index.value = 0;
            }
        }, 1300)
    })
</script>

<style scoped>
.container-fluid {
    background-image: url('../../assets/watercolor-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #212427;
    position: relative;
}

p {
    font-size: 52px;
}

.front-end {
    font-weight: 700;
    font-style: italic;
}
.animation {
    animation: fadeIn linear 2s;

}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(20px);
    }
}

.img-wrapper {
    width: 35%;
    position: absolute;
    right: 0;
    bottom: 0;
}

@media (max-width: 576px) {
    p {
        font-size: 32px;
    }
    .img-wrapper {
        width: 50%;
    }
}
</style>