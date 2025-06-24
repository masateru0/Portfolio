<template>
    <MyHeader />
    <FirstView />
    <section id="about"><AboutMe /></section>
    <section id="works"><MyWorks /></section>
    <section id="skills"><MySkills /></section>
    <section id="contact"><ContactForm /></section>
    <MyFooter />
</template>

<script setup>
import MyHeader from '@/Views/MyHeader.vue';
import FirstView from '@/Views/FirstView.vue';
import AboutMe from '@/Views/AboutMe.vue';
import MyWorks from '@/Views/MyWorks.vue';
import MySkills from '@/Views/MySkills.vue';
import ContactForm from '@/Views/ContactForm.vue';
import MyFooter from '@/Views/MyFooter.vue';
</script>
