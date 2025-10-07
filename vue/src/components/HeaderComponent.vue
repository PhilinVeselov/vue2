<template>
  <header>
    <nav><a href="">главная</a></nav>
    <nav><a href="">О нас</a></nav>
    <nav><a href="">что то</a></nav>
  </header>
</template>
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
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();


</script>