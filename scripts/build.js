const { icons } = require("../iconpacks");
const path = require("path");
const task = require("./tasks");
const performance = require("perf_hooks").performance;

async function runTask(name, fn) {
  const start = performance.now();
  console.log(`----------------- ${name} -----------------`);
  await fn();
  const end = performance.now();
  console.log(`${name}: `, Math.floor(end - start) / 1000, "sec\n\n");
}

async function main() {
  try {
    const DIST = path.resolve(__dirname, "../src/icons");
    const ASSETS = path.resolve(__dirname, "../assets");

    await runTask("Initialize", async () => {
      await task.dirInit(DIST, ASSETS);
    });
    await runTask("Write icons", async () => {
      for (const icon of icons) {
        await task.writeIconModule(icon, DIST, ASSETS);
      }
    });
    console.log("done");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
