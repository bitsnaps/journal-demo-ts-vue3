import { createApp } from "vue"
import App from "./App.vue"
import "@/assets/base.css"
import axios from 'axios'



const app = createApp(App)

// Global object definition
app.config.globalProperties.$http = axios

app.mount("#app");
