export function parseXml(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    
    const parserError = xmlDoc.getElementsByTagName("parsererror");
    if (parserError.length) {
      console.error("Error parsing XML:", parserError[0].textContent);
      return "Error parsing XML content.";
    }
  
    let htmlContent = '';
  
    function processNode(node, depth = 0) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const indent = ' '.repeat(depth * 4); 
        htmlContent += `${indent}<div><strong>${node.nodeName}:</strong>`;
        
        if (node.attributes.length > 0) {
          Array.from(node.attributes).forEach(attr => {
            htmlContent += ` <em>${attr.name}="${attr.value}"</em>`;
          });
        }
  
        if (node.nodeName === 'w:fldChar') {
          const fldCharType = node.getAttribute('w:fldCharType');
          htmlContent += ` <em>w:fldCharType="${fldCharType}"</em>`;
        }
  
        if (node.childNodes.length > 0) {
          htmlContent += `<div style="margin-left: 20px;">`; // Indent child elements
          Array.from(node.childNodes).forEach(child => processNode(child, depth + 1));
          htmlContent += `</div>`;
        } else {
          htmlContent += ` ${node.textContent.trim()}`;
        }
        htmlContent += `</div>`;
      } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        htmlContent += ` ${node.textContent.trim()}`;
      }
    }
  
    processNode(xmlDoc.documentElement);
  
    return htmlContent || "No content found.";
  }