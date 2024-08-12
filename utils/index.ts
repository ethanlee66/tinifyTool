import path, { dirname } from 'path';
import fs from 'fs';

import type {CliConfig} from '@/types'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getCliConfig = (): CliConfig => {
    const targetPath = path.resolve(process.cwd());
    const configFilePath = path.resolve(targetPath, 'tinyPng.config.js');
    if (fs.existsSync(configFilePath)) {
        return require(configFilePath);
    } else {
        throw new Error(`tinyPng.config.js not found in ${targetPath}`);
    }
};