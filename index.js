const program = require('commander');
// const { Command } = require('commander');
// const program = new Command();
program
    .option('-x, --xxx', 'What is the x')
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0, -1).join(' ');
        console.log(words);
    });
program
    .command('clear')
    .description('clear all tasks')
    .action((...args) => {
        console.log('this is clear');
    });

program.parse(process.argv);

console.log(program.xxx)
