#!/usr/bin/env node
import { program } from 'commander';
import { glob } from 'glob';
import { getCliConfig } from '@/utils'
import { TinyPngTool } from '../packages'


program.name('tinifyTool').description('tool for compressing images');

console.info('start compressing images...');

program.command('compress')
.description('Start compressing images..')
.action(() => {
    console.info('start compressing images...');
    const config = getCliConfig();
    const tinyPngTool = new TinyPngTool(config.apiKey)
    const files = glob.sync('**/*.{png,jpg,jpeg}', {
        cwd: config.sourcePath,
        absolute: true,
    });
    files.forEach(async file => {
        await tinyPngTool.compressImage(file)
    })
});

program.parse(process.argv);