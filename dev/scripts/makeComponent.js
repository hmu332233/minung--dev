const fs = require('fs');

const args = process.argv.slice(2);
const componentName = args[0];
const componentPath = `${__dirname}/../src/components/${componentName}`;

const templateJsxData = fs.readFileSync(`${__dirname}/template/Component.jsx`, 'utf8');
const templateIndexData = fs.readFileSync(`${__dirname}/template/index.js`, 'utf8');

const jsxData = templateJsxData.replace(/\[COMPONENT_NAME\]/gi, componentName);
const indexData = templateIndexData.replace(/\[COMPONENT_NAME\]/gi, componentName);

fs.mkdirSync(componentPath);
fs.writeFileSync(`${componentPath}/${componentName}.jsx`, jsxData);
fs.writeFileSync(`${componentPath}/${componentName}.scss`, '');
fs.writeFileSync(`${componentPath}/index.js`, indexData);
