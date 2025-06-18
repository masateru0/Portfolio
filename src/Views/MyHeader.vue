<template>
    <header class="header">
        <div class="container">
            <div class="left-section">
                <MyIcon />
                <div class="logo">Akiyama Masateru Portfolio</div>
            </div>
            <div class="right-section">
                <nav class="nav-links">
                    <RouterLink to="#about">About</RouterLink>
                    <RouterLink to="#Works">Works</RouterLink>
                    <RouterLink to="#Skills">Skills</RouterLink>
                    <RouterLink to="#Profile">Profile</RouterLink>
                </nav>
                <CustomButton
                    tag="button"
                    label="Contact"
                    customClass="contact-btn"/>
            </div>
        </div>
    </header>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
import MyIcon from '@/components/MyIcon.vue';
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

.nav-links {
    display: flex;
    gap: 2rem;
    margin-right: 1rem;
    color: #583C27;
    cursor: pointer;
}

.nav-links :hover {
    text-decoration: underline;
    color: #5BB8CC;
}


.nav-links a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
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