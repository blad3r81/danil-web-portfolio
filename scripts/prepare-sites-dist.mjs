import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await cp(".open-next", "dist/server", { recursive: true, dereference: true });
await cp(".open-next/assets", "dist/client", { recursive: true, dereference: true });
await writeFile("dist/server/index.js", 'export { default } from "./worker.js";\n');
