#!/usr/bin/env node

import { install } from "../src/commands/install.js";

const [, , command , arg] = process.argv; 

if (!command) {
  console.error("Usage: v <command> [args]");
  process.exit(1); 
}

try{
  if(command === "install") {
    if (!arg) {
      throw new Error("Package name required"); 
    }
    await install(arg);
  }
   else if(command === "list"){
   console.log("install : installs the latest version of the repo from github");
   }
   else {
    throw new Error(`Unknown command: ${command}`);
  }
  
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

