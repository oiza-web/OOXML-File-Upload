export const parseXml = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    const paragraphs = Array.from(xmlDoc.getElementsByTagName("w:p"));
    return paragraphs.map(p => {
        const texts = Array.from(p.getElementsByTagName("w:t")).map(t => t.textContent).join('');
        return `<p>${texts}</p>`;
    }).join('');
};