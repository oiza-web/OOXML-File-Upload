<template>
  <div id="app">
    <FileUpload @file-uploaded="parseOOXML" />
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
    async parseOOXML(file) {
      const zip = await JSZip.loadAsync(file);
      const docXml = await zip.file("word/document.xml").async("text");
      this.displayContent(docXml);
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