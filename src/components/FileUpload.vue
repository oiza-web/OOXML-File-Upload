<template>
  <div
    class="file-upload"
    @dragover.prevent
    @drop.prevent="handleDrop"
    @click="triggerFileInput"
  >
    <input
      type="file"
      ref="fileInput"
      @change="handleFileUpload"
      accept=".docx"
      style="display: none"
    />
    <p v-if="!fileName">Drag and drop your OOXML file here, or click to select</p>
    <p v-else>{{ fileName }}</p>
    <button v-if="fileName" @click="removeFile">Remove File</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: ''
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.processFile(file);
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      this.processFile(file);
    },
    processFile(file) {
      if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        this.fileName = file.name;
        this.$emit('file-uploaded', file);
      } else {
        alert('Please upload a valid OOXML file.');
      }
    },
    removeFile() {
      this.fileName = '';
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); 
    }
  }
};
</script>

<style scoped>
.file-upload {
  border: 2px dashed #4CAF50;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 20px 0;
}
.file-upload:hover {
  background-color: #f0f0f0;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>