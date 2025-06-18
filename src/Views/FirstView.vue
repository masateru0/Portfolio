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
    width: 100%;
    height: auto;
    overflow: hidden;
}

.first-view-img {
    width: 100%;
    height: auto;
    display: block;
}

.overlay-text {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: #583C27;
    font-size: 36px;
    font-weight: bold;}
</style>