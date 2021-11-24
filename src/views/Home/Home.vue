<template>
  <Loader v-if="isLoading" />
  <template v-else>
    <header>
      <h1>Fast-Сonverter</h1>
    </header>
    <main>
      <div class="download-block">
        <div class="app__text">
          <p>Выберите файл:</p>
        </div>
        <UploadFile @setLoading="setLoading" />
      </div>
    </main>
  </template>
</template>

<script>
import UploadFile from "../../components/UploadFile/UploadFile";
import Loader from "@/components/Loader/Loader";

export default {
  name: 'Home',
  components: {
    UploadFile,
    Loader
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    setLoading(value) {
      this.isLoading = value
    }
  }
}
</script>
