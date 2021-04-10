const program = require('commander');
const api = require('./index.js')
// const { Command } = require('commander');
// const program = new Command();
program
    .option('-x, --xxx', 'What is the x')
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0, -1).join(' ');
        api.add(words).then(() => console.log('添加成功'), () => console.log('添加失败'));
    });
program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear().then(() => console.log('清除完毕'), () => console.log('清除失败'));
    });

program.parse(process.argv);

if(process.argv.length ===2) {
    // 说明用户只运行 node cli.js 命令
    void api.showAll();
}
