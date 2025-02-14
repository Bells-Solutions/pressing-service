<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
</script>

<template>
  <header>
    <!-- Topbar to go here -->
     
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main>
    <div>
      <nav>
    <button v-if="!isAuthenticated" @click="loginWithRedirect" class="text-2xl">Login</button>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
  </nav>
    </div>
  <router-view />
  </main>
</template>


