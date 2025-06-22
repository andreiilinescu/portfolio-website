import fs from "fs";
import path from "path";
const postsDirectory = path.join(process.cwd(), `src/app/projects/posts`);

export function getAllProjects() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const id = fileName.replace(/\.json$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const data = JSON.parse(fileContents);
      return {
        id,
        ...data,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
