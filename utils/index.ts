import path from 'path';
import fs from 'fs';

import type {CliConfig} from '@/types'

export const getCliConfig = (fileName: string): CliConfig => {
    const targetPath = path.resolve(process.cwd());
    const configFilePath = path.resolve(targetPath, fileName);
    if (fs.existsSync(configFilePath)) {
        return require(configFilePath);
    } else {
        throw new Error(`${fileName} not found in ${targetPath}`);
    }
};