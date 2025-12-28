import fs from "fs"; 
import path from "path"; 
import { getPackagesDir } from "../core/paths.js";
import { getRepoUrl } from "../core/github.js"; 
import { run } from "../utils/exec.js";

export async function install(pkgName) {
  const baseDir = getPackagesDir(); 
  const targetDir = path.join(baseDir , pkgName);

  if (!fs.existsSync(baseDir)){
    fs.mkdirSync(baseDir);
  }

  if (fs.existsSync(targetDir)) {
    fs.mkdirSync(baseDir);
  }

  if (fs.existsSync(targetDir)) {
    throw new Error(`Package '${pkgName}' already installed`);
  }

  const repoUrl = getRepoUrl(pkgName); 
  
  await run("git" , ["clone" , repoUrl , targetDir]);
}
