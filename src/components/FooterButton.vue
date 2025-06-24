<template>
    <button class="footer-button" @click="scrollToTop">
        ← Page TOP
        </button>
</template>

<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style scoped>
.footer-button {
    position: fixed;
    right: 1rem;
    bottom: 2rem;
    border: 2px solid #583c27;
    border-radius: 25px 25px 0 0;
    background-color: #fff;
    color: #583c27;
    width: 48px;
    height: 100px;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.3 ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.footer-button:hover {
    background-color: #f1f1f1;
}
</style>
