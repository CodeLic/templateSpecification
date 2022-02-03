import { createProject } from "./main";

export async function cli(args: string) {
  await createProject();
}
