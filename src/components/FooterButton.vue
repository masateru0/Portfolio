<template>
    <button class="footer-button" @click="scrollToTop">▲ Top</button>
</template>

<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<style scoped>
.footer-button {
    position: fixed;
    right: 1.5rem;
    bottom: 2rem;
    padding: 0.75rem 1.25rem;
    background: linear-gradient(135deg, #73d1e8, #5bb8cc);
    color: #fff;
    border: none;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 1000;
}

.footer-button:hover {
    background: linear-gradient(135deg, #5bb8cc, #4aa0b3);
    transform: translateY(-2px);
}
</style>
