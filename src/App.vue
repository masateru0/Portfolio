<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script setup></script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    body {
        font-size: 13px;
    }
}
</style>
