const db = require("./db.js");

module.exports.add = async (title) => {
    // 读取之前的task
    const list = await db.read()
    // 往里面添加一个 title task
    list.push({title, done: false})
    // 存储任务到文件
    await db.write(list)
}
