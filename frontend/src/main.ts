import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Auth0Plugin } from '@auth0/auth0-vue'
import router from './router'

const app = createApp(App)

const auth0 = new Auth0Plugin({
  domain: "dev-hrfcf4b5etqwe38s.us.auth0.com",
  clientId: "78fanUcNmHMWYHMO1iqOHCoyFjcN7KHB",
  
  cacheLocation: 'localstorage',
  authorizationParams: {
    redirect_uri: window.location.origin,
  }
})

app.use(createPinia())
app.use(router);
app.use(auth0);

app.mount('#app')
