<template>
  <div class="app-container">
    <HeaderComponent class="header" />

    <div class="layout">
      

      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style scoped lang="scss">
.app-container {
  height: 100%;
  display: flex;
  
  flex-direction: column;
}

.layout {
  display: flex;
  flex: 1;
  overflow-y: auto;
}

.sidebar {
  width: 16%;
  flex-shrink: 0;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>