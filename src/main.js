import { createApp } from "vue";
import App from "./App.vue";

import components from "./index.js";

let app = createApp(App);
app.use(components);

app.mount("#app");
