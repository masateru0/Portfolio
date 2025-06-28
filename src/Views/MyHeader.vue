<template>
    <header class="header">
        <div class="container">
            <div class="left-section">
                <RouterLink :to="{ name: 'TopPage' }">
                    <MyIcon />
                </RouterLink>

                <RouterLink :to="{ name: 'TopPage' }" class="logo">
                    Akiyama Masateru portfolio
                </RouterLink>
            </div>
            <div class="right-section">
                <nav class="nav-links">
                    <RouterLink :to="{ name: 'TopPage', hash: '#about' }">About</RouterLink>
                    <RouterLink :to="{ name: 'TopPage', hash: '#works' }">Works</RouterLink>
                    <RouterLink :to="{ name: 'TopPage', hash: '#skills' }">Skills</RouterLink>
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
import CustomButton from '@/components/CustomButton.vue'
import MyIcon from '@/components/MyIcon.vue'
import { useRouter } from 'vue-router'

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
        const router = useRouter()
        router.push({ name: 'TopPage', hash: '#contact' })
    }
}
</script>

<style>
.header {
    background-color: #f4fcfd;
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
    color: #583c27;
    margin-left: 1rem;
    cursor: pointer;
    text-decoration: none;
}

.logo:hover {
    color: #8b4513;
}

.right-section {
    display: flex;
    align-items: center;
}

.nav-links a,
.nav-links .router-link-active {
    text-decoration: none;
    color: #583c27;
    font-weight: 500;
    transition: color 0.3 ease;
    margin-right: 34px;
    gap: 2rem;
}

.nav-links a:hover,
.nav-links .router-link-active:hover {
    color: #5bb8cc;
    text-decoration: underline;
}

.contact-btn {
    background-color: #73d1e8 !important;
    color: white !important;
    border: none !important;
    transition: background-color 0.3s ease !important;
    font-size: 16px !important;
    border-radius: 20px !important;
    padding: 0.5rem 1.5rem !important;
}

.contact-btn:hover {
    background-color: #5bb8cc !important;
    color: white !important;
}
</style>
