<template>
    <div class="work-card" @click="$emit('click')">
        <div class="work-img"></div>
        <div class="work-info">
            <div class="work-title">{{ title }}</div>
            <div class="work-description">{{ description }}</div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
})
</script>
<style scoped>
.work-card {
    max-width: 320px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
    background: none;
    box-shadow: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
}
.work-img {
    width: 100%;
    height: 250px;
    background: #d3d3d3;
    border-radius: 8px;
    margin-bottom: 16px;
    object-fit: cover;
    display: block;
}
.work-info {
    padding-left: 4px;
    width: 100%;
}
.work-title {
    font-weight: bold;
    font-size: 1.1rem;
    color: #4b3c2a;
    margin-bottom: 4px;
}
.work-description {
    color: #444;
    font-size: 1rem;
}
</style>
