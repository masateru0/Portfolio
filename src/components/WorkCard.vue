<template>
    <div class="work-card" @click="$emit('click')">
        <img :src="image" alt="Work Image" class="work-img" />
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
    max-width: 370px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
    background: none;
    box-shadow: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.work-img {
    width: 370px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.work-img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.18);
}

.work-info {
    padding-left: 4px;
    width: 100%;
}

.work-title {
    font-weight: bold;
    font-size: 1.1rem;
    color: #2c2c33;
    margin-bottom: 4px;
}

.work-description {
    color: #2c2c33;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .work-card {
        max-width: 320px;
    }

    .work-img {
        width: 320px;
        height: 216px;
    }

    .work-title {
        font-size: 1rem;
    }

    .work-description {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .work-card {
        max-width: 280px;
    }

    .work-img {
        width: 280px;
        height: 189px;
    }

    .work-title {
        font-size: 0.95rem;
    }

    .work-description {
        font-size: 0.85rem;
    }
}
</style>