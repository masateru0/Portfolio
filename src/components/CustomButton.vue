<template>
    <component :is="tag" :class="['custom-button', 'customClass']" v-bind="$attrs">
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
.custom-button {
    background-color: #73d1e8;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.custom-button:hover {
    background-color: #5bb8cc;
}
</style>
