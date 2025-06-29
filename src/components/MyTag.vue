<template>
    <span class="tag"># {{ label }}</span>
</template>

<script setup>
defineProps({
    label: String
})
</script>

<style scoped>
.tag{
    background-color: #D6F2F8;
    padding: 0.3rem 0.6rem;
    border-radius: 30px;
    font-size: 12px;
    font-weight: bold;
    color: #2C2C33;
}
</style>