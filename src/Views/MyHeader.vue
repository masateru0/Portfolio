<template>
    <header class="header">
        <div class="container">
            <div class="left-section">
                <MyIcon />
                <div class="logo">Akiyama Masateru Portfolio</div>
            </div>
            <div class="right-section">
                <nav class="nav-links">
                    <a href="#about">About</a>
                    <a href="#works">Works</a>
                    <a href="#skills">Skills</a>
                    <RouterLink :to="{ name: 'ProfilePage' }">Profile</RouterLink>
                </nav>
                <CustomButton
                    tag="button"
                    label="Contact"
                    customClass="contact-btn"
                    @click="scrollToContact"
                />
            </div>
        </div>
    </header>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
import MyIcon from '@/components/MyIcon.vue';

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style>
.header {
    background-color: #F4FCFD;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.left-section {
    display: flex;
    align-items: center;
}

.left-section .logo-img {
    margin-right: 1rem;
}

.logo {
    font-size: 16px;
    font-weight: bold;
    color: #583C27;
    margin-left: 1rem;
}

.right-section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.nav-links a,
.nav-links .router-link-active {
    text-decoration: none;
    color: #583C27;
    font-weight: 500;
    transition: color 0.3 ease;
    margin-right: 1rem;
    gap: 2rem;
}

.nav-links a:hover,
.nav-links .router-link-active:hover {
    color: #5BB8CC;
    text-decoration: underline;
}

.contact-btn {
    background-color: #73D1E8 !important;
    color: white !important;
    border: none !important;
    transition: background-color 0.3s ease !important;
    font-size: 16px !important;
    border-radius: 20px !important;
    padding: 0.5rem 1.5rem !important;
}

.contact-btn:hover {
    background-color: #5BB8CC !important;
    color: white !important;
}
</style>