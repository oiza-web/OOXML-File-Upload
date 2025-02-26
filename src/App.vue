<template>
  <div id="app">
    <FileUpload @file-uploaded="parseFile" />
    <div v-html="parsedContent" class="content-display"></div>
  </div>
</template>

<script>
import JSZip from 'jszip';
import FileUpload from './components/FileUpload.vue';
import { parseXml } from './xmlParser'; 

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      parsedContent: ''
    };
  },
  methods: {
    async parseFile(file) {
      try {
        if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          const zip = await JSZip.loadAsync(file);
          const docXml = await zip.file("word/document.xml").async("text");
          this.displayContent(docXml);
        } else if (file.type === 'application/xml' || file.type === 'text/xml') {
          const reader = new FileReader();
          reader.onload = (e) => {
            const xmlContent = e.target.result;
            this.displayContent(xmlContent);
          };
          reader.readAsText(file);
        } else {
          alert('Unsupported file type. Please upload a .docx or .xml file.');
        }
      } catch (error) {
        console.error("Error parsing file:", error);
        alert("Failed to parse the file. Please ensure it is a valid .docx or .xml file.");
      }
    },
    displayContent(content) {      
      this.parsedContent = parseXml(content);
}
  }
};
</script>

<style>
.content-display {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>