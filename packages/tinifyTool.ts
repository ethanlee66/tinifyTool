import tinify from 'tinify'
import {glob} from 'glob'
import {TinifyPattern} from '@/types/constants'

export class TinifyTool {
  constructor(key: string) {
    tinify.key = key;
  }

  public async compressImage(inputPath: string, outputPath?: string) {
    try {
      const source = tinify.fromFile(inputPath);
      await source.toFile(outputPath || inputPath); // 默认覆盖原文件
      console.log(`Compressed ${inputPath} and saved to ${inputPath}`);
    } catch (error) {
      console.error('Error compressing image:', error);
    }
  }

  public async compressDirectory(path: string) {
    const files = glob.sync(TinifyPattern, {
        cwd: path,
        absolute: true,
    });
    files.forEach(async file => {
        await this.compressImage(file)
    })
  }
}