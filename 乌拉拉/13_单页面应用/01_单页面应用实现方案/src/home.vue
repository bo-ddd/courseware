<template>
    <div>
        <h1 class="title">
            这是第一个页面  home page
        </h1>
    </div>
</template>

<script>
    console.log('hello world')

    let title = document.querySelector('.title');
    title.innerHTML = 'kwkwwkwkwkwk'
</script>


<!-- SFC -->
<!-- 单页面模块 -->
<!-- 为了让SFC 和 html有所区分，通常情况下，我们会给他起一后缀 -->
<!-- .vue -->

<style>
    .title{
        background:red;
        font-size: 50px;
    }
</style>