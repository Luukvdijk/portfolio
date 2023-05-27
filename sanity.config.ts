import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "ruvv48l0",
  dataset: "production",
  title: "My personal website",
  apiVersion: "2023-05-25",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
