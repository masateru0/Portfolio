<template>
    <div>
        <el-button type="primary" round :class="customClass">{{ label }}</el-button>
    </div>
</template>

<script setup>
defineProps({
    label: String,
    customClass: String,
})
</script>