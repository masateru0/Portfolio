<template>
    <div class="image-out">
        <img :src="src" alt="Selected Image" class="selected-image" />
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.image-out {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.selected-image {
    width: 500px;
    height: 320px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>