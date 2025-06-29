<template>
    <footer class="footer-section">
        <div class="footer-content">
            <p class="thank-you">Thank you for coming</p>
            <p class="copyright">©︎ 2025 Masateru Akiyama</p>
        </div>

        <FooterButton />
    </footer>
</template>

<script setup>
import FooterButton from '@/components/FooterButton.vue'
</script>

<style scoped>
.footer-section {
    background-color: #73d1e8;
    padding: 2rem 1rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.thank-you {
    color: #2C2C33;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 1rem;
}

.copyright {
    font-size: 12px;
    color: #2C2C33;
}
</style>
