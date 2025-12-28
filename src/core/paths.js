import path from "path";
import process from "process";

export function getPackagesDir(){
  return path.join(process.cwd() , "v_packages");
}
