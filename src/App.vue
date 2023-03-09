<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <s-scroll-list
      :list-data="listData"
      :content-render="renderFunction"
      :style="{
        width: '1000px',
        height: '500px',
        border: '1px solid transparent',
      }"
    ></s-scroll-list>
  </div>
</template>

<script setup lang="jsx">
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

function renderFunction(item) {
  return (
    <div>
      <span>121314</span>
      <span>{item.title}</span>
    </div>
  );
}
</script>

<style lang="less" scoped></style>
