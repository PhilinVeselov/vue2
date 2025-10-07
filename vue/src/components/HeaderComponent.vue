<template>
  <header>
    <nav><a href="/">главная</a></nav>
    <nav><a href="/about">О нас</a></nav>
    <nav><a href="">что то</a></nav>

  </header>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

</script>
<style scoped lang="scss">
header{
  display: flex;
  justify-content: center;
  color: aquamarine;
  background-color: gray;
nav{
  margin-right: 30px;
  a{
    font-size: 20px;
    text-decoration: none;
    color: greenyellow
  }
}
}

</style>
