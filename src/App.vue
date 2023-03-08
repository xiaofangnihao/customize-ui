<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <scroll-list :list-data="listData"></scroll-list>
</template>

<script setup>
import scrollList from "./components/scrollList.vue";
import { reactive } from "vue";

let listData = reactive([
  {
    title: "无缝滚动第一行",
  },
  {
    title: "无缝滚动第二行",
  },
  {
    title: "无缝滚动第三行",
  },
  {
    title: "无缝滚动第四行",
  },
  {
    title: "无缝滚动第五行",
  },
  {
    title: "无缝滚动第六行",
  },
  {
    title: "无缝滚动第七行",
  },
  {
    title: "无缝滚动第八行",
  },
  {
    title: "无缝滚动第九行",
  },
  {
    title: "无缝滚动第十行",
  },
  {
    title: "无缝滚动第十一行",
  },
]);
</script>

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
