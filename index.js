#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';



// const chalk = require("chalk");
// const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Meulemans Philippe"),
    handle: chalk.white("laverdure77"),
    work: chalk.white("Learning Web dev. @ BeCode.org"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("NONE"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~laverdure77"),
    github: chalk.gray("https://github.com/") + chalk.green("laverdure77"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("Don't Remeber!"),
    
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);
