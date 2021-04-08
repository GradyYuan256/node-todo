const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const p = require('path');
const fs = require('fs');
const dbPath = p.join(home, '.todo')

module.exports.add = (title) => {
    // 读取之前的task
    fs.readFile(dbPath, {flag: 'a+'}, (error, data)=>{
        if(error) {
            console.log(error)
        } else {
            let list;
            try {
                list = JSON.parse(data.toString());
            } catch (e) {
                list = []
            }
            const task = {
                title: title,
                done: false
            };
            list.push(task);
            const string = JSON.stringify(list);
            fs.writeFile(dbPath, string+'\n', (e)=>{
                if(e) {
                    console.log(e)
                }
            })
        }
    })
    // 往里面添加一个 title task
    // 存储任务到文件
}
