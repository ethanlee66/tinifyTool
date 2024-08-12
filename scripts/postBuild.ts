import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

// 获取当前模块的 URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = path.resolve(__dirname, '../dist/package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));


delete packageJson.scripts;
delete packageJson.devDependencies;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));