<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://infinitech.lv" target="_blank">
      <img src="/logo_blue_favicon_2.svg" class="logo" alt="Infinitech logo" />
    </a>
  </div>
  <HelloWorld msg="Under maintenance..." />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
