<template>
    <component :is="tag" :to="to" :href="href" :class="customClass" class="base-btn">
        {{ label }}
    </component>
</template>

<script setup>
defineProps({
    tag: {
        type: String,
        default: 'button',
    },
    label: {
        type: String,
        required: true,
    },
    customClass: {
        type: String,
        default: '',
    },
})
</script>

<style scoped>
.base-btn {
    cursor: pointer;
    border: none;
    padding: 0.5rem 3rem;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.profile-btn {
    background-color: #73d1e8;
    color: black;
}

.profile-btn:hover {
    background-color: #5bb8cc;
}
</style>
