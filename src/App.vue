<template>
  <div class="app">
    <header>
      <h1>Fast-Сonverter</h1>
    </header>
    <main>
      <div class="download-block">
        <div class="app__text">
          <p>Выберите файл:</p>
        </div>
        <UploadFile />
      </div>
    </main>
  </div>
</template>

<script>
import './scss/fonts/font.css';
import './scss/main.scss';

import UploadFile from "./components/DownloadFile/UploadFile";

export default {
  name: 'App',
  components: {
    UploadFile
  }
}
</script>

