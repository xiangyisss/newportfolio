<script setup lang="ts">
import HomeVue from './pages/Home/Home.vue';
import AboutVue from './pages/About/About.vue';
import ProjectsVue from './pages/Projects/Projects.vue';
import ContactVue from './pages/Contact/Contact.vue';
</script>

<template>
	<nav style="z-index: 1;" >
		<a href="#home">HOME</a>
		<a  href="#about">ABOUT</a>
		<a  href="#projects">PROJECTS</a>
		<a  href="#contact">CONTACT</a>
	</nav>
	<main class="scroll-container">
		<HomeVue id="home"/>
		<AboutVue id="about"/>
		<ProjectsVue id="projects"/>
		<ContactVue id="contact"/>
	</main>
</template>

<style>
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-weight: normal;

}
html,body {
	scroll-behavior: smooth;
	overflow-x: hidden;
}
body {
	width: 97.5vw;
	min-height: 100vh;
	margin: 0 auto;
	line-height: 1.6;
	font-family: 'Poppins', sans-serif;
	font-size: 15px;
	text-rendering: optimizeLegibility;
	position: relative;
	color: #212427;
}


nav {
	width: 100%;
	height: 8vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: fixed;
	top: 0;
	z-index: 1;
	background: linear-gradient(white, rgb(0,0,0,0));
	backdrop-filter: blur(1PX);
}

nav a {
	text-decoration: none;
	color: #212427;
	display: inline-block;
	margin-left: 1.5rem;
	font-weight: 500;
	font-size: inherit;
}

a:hover, a:focus, a:active {
	color: #73c7f5;
}
.scroll-container {
	overflow-y: smooth;
}


</style>
