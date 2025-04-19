const fs = require("fs");
const { DOMParser } = require("xmldom");

// Replace with the path to your SVG file
const filePath = "./signature.svg";

// Read and parse SVG
const svgContent = fs.readFileSync(filePath, "utf-8");
const doc = new DOMParser().parseFromString(svgContent, "image/svg+xml");

// Extract <path> elements
const paths = Array.from(doc.getElementsByTagName("path"));
const pathData = paths.map((p) => p.getAttribute("d")).filter(Boolean);

// Output result
console.log("Extracted paths:");
console.log(JSON.stringify(pathData, null, 2));
// Write the extracted paths to a file
fs.writeFileSync('paths.json', JSON.stringify(pathData, null, 2));
console.log('Paths have been written to paths.json');