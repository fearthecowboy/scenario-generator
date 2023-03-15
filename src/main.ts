import { sleep } from "./async/sleep.ts";

console.log('this is the main file');

async function main() {
  console.log('begin main');
  await sleep(3000)
  console.log('end main');
}

void main();