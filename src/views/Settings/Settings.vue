<template>
  <header class="download-header">
    <h1>Настройки</h1>
    <span @click="$router.push('/')">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.29 6.00001L6.83 2.46001C7.01626 2.27265 7.1208 2.0192 7.1208 1.75501C7.1208 1.49082 7.01626 1.23737 6.83 1.05001C6.73704 0.956281 6.62644 0.881887 6.50458 0.831118C6.38272 0.780349 6.25202 0.754211 6.12 0.754211C5.98799 0.754211 5.85729 0.780349 5.73543 0.831118C5.61357 0.881887 5.50297 0.956281 5.41 1.05001L1.17 5.29001C1.07628 5.38297 1.00188 5.49357 0.951114 5.61543C0.900345 5.73729 0.874207 5.868 0.874207 6.00001C0.874207 6.13202 0.900345 6.26273 0.951114 6.38459C1.00188 6.50645 1.07628 6.61705 1.17 6.71001L5.41 11C5.50344 11.0927 5.61426 11.166 5.7361 11.2158C5.85794 11.2655 5.9884 11.2908 6.12 11.29C6.25161 11.2908 6.38207 11.2655 6.50391 11.2158C6.62575 11.166 6.73656 11.0927 6.83 11C7.01626 10.8126 7.1208 10.5592 7.1208 10.295C7.1208 10.0308 7.01626 9.77737 6.83 9.59001L3.29 6.00001Z" fill="black"/>
      </svg>
      <p>Назад</p>
    </span>
  </header>
  <main class="setting-wrapper">
    <div class="setting-item">
      <p class="setting-item__title">Место хранение файлов:</p>
      <div class="setting-item__input">
        <input type="text" :value="getConfigFile.settings.saveFilePath" disabled="disabled">
        <div class="filePath-btn">
          <input type="file" id="filePath">
          <label for="filePath">Изменить</label>
        </div>
      </div>
      <div class="setting-item__checkbox">
        <input type="checkbox" id="saveAs">
        <label for="saveAs">Сохранять рядом с исходным файлом</label>
      </div>
    </div>
  </main>
</template>

<script>
import './settings.scss';

import { mapGetters } from 'vuex'

export default {
  name: "Settings",
  computed: {
    ...mapGetters(['getConfigFile'])
  }
}
</script>
