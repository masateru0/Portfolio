<template>
    <header :class="['header', { scrolled: isScrolled }]">
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
                <nav class="nav-links" :class="{ 'nav-open': isMenuOpen }">
                    <div class="nav-row">
                        <RouterLink :to="{ name: 'TopPage', hash: '#about' }" @click="closeMenu"
                            >About</RouterLink
                        >
                        <RouterLink :to="{ name: 'TopPage', hash: '#works' }" @click="closeMenu"
                            >Works</RouterLink
                        >
                        <RouterLink :to="{ name: 'TopPage', hash: '#skills' }" @click="closeMenu"
                            >Skills</RouterLink
                        >
                        <RouterLink :to="{ name: 'ProfilePage' }" @click="closeMenu"
                            >Profile</RouterLink
                        >
                    </div>
                    <button class="mobile-contact-btn" @click="scrollToContact">Contact</button>
                </nav>
                <CustomButton
                    tag="button"
                    label="Contact"
                    customClass="contact-btn"
                    @click="scrollToContact"
                />
                <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue'
import MyIcon from '@/components/MyIcon.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const onScroll = () => {
    isScrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
        router.push({ name: 'TopPage', hash: '#contact' })
    }
    closeMenu()
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: background-color 0.3s;
}
.header.scrolled {
    background-color: rgba(244, 252, 253, 0.85);
    backdrop-filter: blur(4px);
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
    color: #2c2c33;
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
    color: #2c2c33;
    font-weight: 500;
    transition: color 0.3 ease;
    margin-right: 40px;
    margin-left: 20px;
    gap: 2rem;
}

.nav-links a:first-child {
    margin-left: 0;
    margin-top: 0;
}

.nav-links a:nth-child(2) {
    margin-left: 0;
}

.nav-links a:nth-child(3) {
    margin-left: 0;
}

.nav-links a:nth-child(4) {
    margin-left: 0;
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

.mobile-contact-btn {
    display: none;
    background-color: #73d1e8;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 1rem auto;
    width: fit-content;
}

.mobile-contact-btn:hover {
    background-color: #5bb8cc;
}

.hamburger {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    justify-content: space-around;
}

.hamburger span {
    width: 100%;
    height: 3px;
    background-color: #2c2c33;
    transition: all 0.3s ease;
    border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
    .header {
        padding: 1rem;
    }

    .logo {
        font-size: 14px;
        margin-left: 0.5rem;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: rgba(244, 252, 253, 0.95);
        backdrop-filter: blur(10px);
        padding: 2rem 0 1rem 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 999;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    .nav-links.nav-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    .nav-links .nav-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-bottom: 2rem;
    }
    .nav-links .nav-row a {
        margin: 0 1.5rem;
        font-size: 18px;
        text-align: center;
        color: #2c2c33;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.3s ease;
        padding: 0.5rem 0;
        display: inline-block;
    }
    .mobile-contact-btn {
        display: block;
        margin: 0 auto;
        width: 70%;
        max-width: 300px;
        text-align: center;
    }
    .contact-btn {
        display: none;
    }
    .hamburger {
        display: flex;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 0.5rem 1rem;
        height: 70px;
    }

    .logo {
        font-size: 12px;
    }

    .nav-links {
        top: 70px;
    }
}
</style>