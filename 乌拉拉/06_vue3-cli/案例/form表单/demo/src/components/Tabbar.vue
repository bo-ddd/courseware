<script lang="ts" setup>
const handleClick = function(){
    console.log('hello world')
}
</script>

<template>
    <div class="tabbar" @click="handleClick">
        <slot></slot>
    </div>
</template>

<style scoped>
    .tabbar{
        display:flex;
        align-items: center;
        justify-content: space-around;
        font-size: 1.2rem;
        height:60px;
    }
</style>