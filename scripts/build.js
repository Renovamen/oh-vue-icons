const performance = require("perf_hooks").performance;
const path = require("path");
const { icons } = require("../iconpacks");
const task = require("./tasks");

async function runTask(name, fn) {
  const start = performance.now();
  console.log(`----------------- ${name} -----------------`);
  await fn();
  const end = performance.now();
  console.log(`${name}: `, Math.floor(end - start) / 1000, "sec\n\n");
}

async function main() {
  try {
    const DIST = path.resolve(__dirname, "../package/icons");
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
