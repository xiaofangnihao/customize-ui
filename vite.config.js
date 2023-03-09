import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    host: "localhost", //默认localhost
    port: 8000, // 默认3000
    strictPort: false, // 设为true时会在port被占用时直接退出, 不再尝试下一个可用端口
    https: false, // 是否开启https
    open: "/", // String时会被当作URL的路径名
    ssr: false, // 服务端渲染
    base: "./", // 开发或生产环境下的公共基础路径
  },
});
