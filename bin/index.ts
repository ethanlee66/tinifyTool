#!/usr/bin/env node
import { program } from 'commander';
import { getCliConfig } from '@/utils'
import { TinifyTool} from '../packages'

import {ConfigFileName} from '@/types/constants'


program.name('tinifyTool').description('tool for compressing images');

console.info('start compressing images...');

program.command('compress')
.description('compressing images..')
.action(() => {
    const config = getCliConfig(ConfigFileName);
    const tinyPngTool = new TinifyTool(config.apiKey)

    tinyPngTool.compressDirectory(config.sourcePath)
});

program.parse(process.argv);