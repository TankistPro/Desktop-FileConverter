<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import './scss/fonts/font.css';
import './scss/main.scss';

import { ipcRenderer } from "electron";

export default {
  name: 'App',
  mounted() {
    ipcRenderer.send('getConfigFile')

    ipcRenderer.on('configFile',(event, response) => {
      if (response.status) {
        this.$store.commit('setConfigFile', response.data)
      } else {
        console.log('Error with config file: ', response.data)
      }
    })
  }
}
</script>

