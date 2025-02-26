# first-read-assessment

# OOXML File Upload Application

## Project Overview
This application is a Vue.js-based Single Page Application (SPA) that allows users to upload OOXML (.docx) files. It parses the uploaded document and displays its content while preserving formatting. The application features a user-friendly interface that supports drag-and-drop functionality and provides visual feedback during the upload process.

## Project setup
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd name of repository
```
npm install
```
### Install Additional Libraries (if not included):
```
npm install jszip mammoth
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Functionality Overview
The application includes the following features:

- **File Upload**: Users can upload OOXML (.docx) files via drag-and-drop or file selection.
- **Content Parsing**: The application parses the uploaded document and extracts text while preserving formatting.
- **Responsive Design**: The interface is designed to be user-friendly and responsive across different devices.
- **Feedback Mechanism**: Users receive visual feedback upon file upload and can remove files easily.

### Technologies Used
- Vue.js
- JSZip
- Mammoth.js

## Challenges and Solutions
### Challenge 1: Parsing OOXML Files
**Solution**: Utilized the `JSZip` library to read the OOXML format and `Mammoth.js` for extracting text, ensuring that the formatting was preserved as much as possible.

### Challenge 2: Implementing Drag-and-Drop Functionality
**Solution**: Implemented drag-and-drop capabilities using event listeners for `dragover` and `drop` events, enhancing the user experience.

### Challenge 3: Ensuring File Validation
**Solution**: Added checks to validate file types before processing to prevent the upload of unsupported formats.