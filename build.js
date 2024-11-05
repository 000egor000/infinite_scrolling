import { build } from "vite";

async function buildProject() {
  try {
    await build({
      root: "./", // Корневая директория проекта
      build: {
        outDir: "dist", // Папка для выходных файлов
        rollupOptions: {
          input: "./index.html", // Входной HTML файл
        },
      },
    });
    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
  }
}

buildProject();
