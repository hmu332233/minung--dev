const fs = require('fs');

const args = process.argv.slice(2);
const componentName = args[0];
const componentPath = `../src/components/${componentName}`;

const templateJsxData = fs.readFileSync('./template/Component.jsx', 'utf8');
const templateIndexData = fs.readFileSync('./template/index.js', 'utf8');

const jsxData = templateJsxData.replace(/\[COMPONENT_NAME\]/gi, componentName);
const indexData = templateIndexData.replace(/\[COMPONENT_NAME\]/gi, componentName);

fs.mkdirSync(componentPath);
fs.writeFileSync(`${componentPath}/${componentName}.jsx`, jsxData);
fs.writeFileSync(`${componentPath}/${componentName}.scss`, '');
fs.writeFileSync(`${componentPath}/index.js`, indexData);

