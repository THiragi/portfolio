import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark'
import html from 'remark-html'

const contentsDirectory = path.join(process.cwd(), 'contents');

export async function getContentsData() {
  const allDirents = fs.readdirSync(contentsDirectory, {withFileTypes: true});
  const dirNames = allDirents.filter(dirents => dirents.isDirectory()).map(({name}) => name);
  const allContentsData = Object.create(null);

  for (const name of dirNames) {
    const filesDirectory = path.join(process.cwd(), `contents/${name}`);
    const fileNames = fs.readdirSync(filesDirectory);
    const allFilesData = await Promise.all(fileNames.map(async (fileName) => {
      // ファイル名から拡張子を取り除き、idとして割りあてる
      const id = fileName.replace(/\.md$/, '');
      // ファイルパス
      const fullPath = path.join(filesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
      const contentHtml = processedContent.toString();
  
      return {
        id,
        contentHtml,
        ...(matterResult.data)
      };
    }));
    allContentsData[name] = allFilesData;
  }
  
  return allContentsData;
}
