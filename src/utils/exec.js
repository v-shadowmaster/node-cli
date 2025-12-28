import { spawn } from "child_process"; 

export function run(cmd , args , options = {}){
  return new Promise((resolve , reject) => {
    const child = spawn(cmd , args, { stdio : "inherit", ...options});

    child.on("close" , (code) => {
      if (code !== 0) {
        reject(new Error(`${cmd} failed with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}
