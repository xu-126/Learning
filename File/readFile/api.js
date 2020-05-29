const glob = require('glob')
const fs = require('fs');
const path = require('path');
const reg =  /(\/api.+(`|'|"$))/g;

const modules = glob.sync('**/service.js');
// console.log(modules);  // [ 'file01/service.js', 'file02/service.js' ]
const result = {};

modules.forEach(relativePath => {
    const readFileContent = fs.readFileSync( relativePath).toString();
   
    const moduleName = relativePath.replace('service.js', '');
    // console.log(moduleName);  //file01/ file02/
    const match = readFileContent.match(reg);
    
    result[moduleName] = match;
   
})
let output = '';
Object.keys(result).forEach(modules =>  {  // [ 'file01/', 'file02/' ]
    
    // 文件路径
    output += `${modules}\n`;
    
    // api列表
    const apis = result[modules];
    apis.forEach((api,index) =>  {
        output += `${index + 1}.${api}\n`
    })
    output += `\n`;
})

fs.writeFileSync('api.md',output);