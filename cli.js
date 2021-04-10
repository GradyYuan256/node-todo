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
        api.add(words);
    });
program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear()
    });

program.parse(process.argv);

