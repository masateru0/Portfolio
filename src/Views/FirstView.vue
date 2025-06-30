<template>
    <div class="img-container">
        <img class="first-view-img" src="@/assets/first-view.svg" alt="FirstView" />
    </div>
</template>

<script setup></script>

<style scoped>
.img-container {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 80px;
}

.first-view-img {
    width: 100%;
    height: auto;
    display: block;
}

@media (max-width: 768px) {
    .img-container {
        margin-top: 110px;
    }
}

@media (max-width: 480px) {
    .img-container {
        margin-top: 70px;
    }
}
</style>