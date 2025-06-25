<template>
    <div class="contents-text">
        <div class="bar"></div>
        <h2 class="title">{{ title }}</h2>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.contents-text {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4FCFD;
}

.bar {
    width: 10px;
    height: 40px;
    background-color: #73D1E8;
    margin-right: 10px;
}

.title {
    font-size: 40px;
    font-weight: bold;
    color: #583C27;
}
</style>