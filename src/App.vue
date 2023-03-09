<template>
  <div></div>
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
