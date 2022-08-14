import packageJson from '../../../package.json';
import * as bin from './index';
import config from '../../../config.json'

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:
    ${commands}

  [Tab]: trigger completion.
  [ctrl+l]: clear terminal.
  [ctrl+c]: cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'blank-manash';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const blog = async (args: string[]): Promise<string> => {
  window.open('https://blank-manash.github.io/blog/', '_self');

  return 'Opening Blog version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening ${config.email}....`
};

export const vi = async (args: string[]): Promise<string> => {
  return `Why use vim? Try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `Why use vim? Try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Really? Emacs? You should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.
    This incident will be reported, LOL`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/blank-manash/terminal-website', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

export const banner = (args?: string[]): string => {
  return `
=============================================================
 
 █████     ████                       █████                                                                        █████     
░░███     ░░███                      ░░███                                                                        ░░███      
 ░███████  ░███   ██████   ████████   ░███ █████            █████████████    ██████   ████████    ██████    █████  ░███████  
 ░███░░███ ░███  ░░░░░███ ░░███░░███  ░███░░███  ██████████░░███░░███░░███  ░░░░░███ ░░███░░███  ░░░░░███  ███░░   ░███░░███ 
 ░███ ░███ ░███   ███████  ░███ ░███  ░██████░  ░░░░░░░░░░  ░███ ░███ ░███   ███████  ░███ ░███   ███████ ░░█████  ░███ ░███ 
 ░███ ░███ ░███  ███░░███  ░███ ░███  ░███░░███             ░███ ░███ ░███  ███░░███  ░███ ░███  ███░░███  ░░░░███ ░███ ░███ 
 ████████  █████░░████████ ████ █████ ████ █████            █████░███ █████░░████████ ████ █████░░████████ ██████  ████ █████
░░░░░░░░  ░░░░░  ░░░░░░░░ ░░░░ ░░░░░ ░░░░ ░░░░░            ░░░░░ ░░░ ░░░░░  ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░░░ ░░░░░░  ░░░░ ░░░░░ 
                                                                                                                             
                                                                                                              
=============================================================

Welcome to my terminal Repository.
This website holds as frontend for me to share all my computing ideas that always were in my mind.
Type :help for a list of commands that can be executed
------ 
`
};
