import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "@/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "sanity-tut",

  apiVersion: "2023-03-04",
  projectId: "8at4agk2",
  dataset: "sanity",
  basePath: "/admin",

  schema: { types: schemas },
  plugins: [deskTool()],
});
