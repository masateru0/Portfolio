<template>
    <div class="img-container">
        <img
            class="first-view-img"
            src="@/assets/first-view.png"
            alt="FirstView"
        >
        <p class="overlay-text">Building My Future Code.</p>
    </div>
</template>

<script setup></script>

<style scoped>

.img-container {
    position: relative;
    display: inline-block;
}

.first-view-img {
    width: 100%;
    height: auto;
}

.overlay-text {
    position: absolute;
    bottom: 8%;
    left: 13%;
    color: #583C27;
    font-size: 1.5rem;
    font-weight: bold;}
</style>