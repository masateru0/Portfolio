<template>
    <el-tooltip placement="top">
        <template #content>   星5: 独力で可能<br />星4: 調べながら可能<br />
            星3: 習得中<br />星2: 勉強中<br />星1: 未習得   </template>
        <img src="@/assets/tip.png" alt="tip logo" class="tooltip-img">
    </el-tooltip>
</template>

<style scoped>
.tooltip-img {
    width: 14px;
    height: 14px;
    cursor: pointer;
}
</style>
