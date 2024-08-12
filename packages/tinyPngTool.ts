import tinify from 'tinify'
import {getCliConfig} from '../utils/index'
export class TinyPngTool {
  constructor(key: string) {
    tinify.key = key;
  }

  get cliConfig() {
    return getCliConfig()
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
}