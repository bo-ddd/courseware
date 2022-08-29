<script lang="ts" setup>

</script>

<template>
    <div class="tabbar-item">
        <slot name="icon"></slot>
        <slot></slot>
    </div>
</template>

<style scoped>
    .tabbar-item{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding:5px 10px;
    }
</style>