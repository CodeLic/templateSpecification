import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
const access = promisify(fs.access);
const copy = promisify(ncp);
async function copyTemplateFiles(options) {
    return copy(options.templateDirectory, options.targetDirectory, {
        clobber: false,
    });
}
export async function createProject() {
    const options = {
        targetDirectory: path.resolve(process.cwd(), "仕様書"),
    };
    const currentFileUrl = import.meta.url;
    const templateDir = path.resolve(new URL(currentFileUrl).pathname.replace("/dist/main.js", ""), "仕様書");
    options.templateDirectory = templateDir;
    try {
        await access(templateDir, fs.constants.R_OK);
    }
    catch (err) {
        console.error("%s Invalid template name", "ERROR");
        process.exit(1);
    }
    console.log("コピーを開始します。");
    try {
        await copyTemplateFiles(options);
    }
    catch (err) {
        console.error("コピーに失敗しました。");
    }
    console.log("完了しました。");
    return;
}
//# sourceMappingURL=main.js.map