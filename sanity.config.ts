/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import schemas from "@/sanity/schemas";

export default defineConfig({
  basePath: "/admin",

  name: "default",
  title: "sanity-tut",
  apiVersion: "2023-03-04",
  projectId: "8at4agk2",
  dataset: "sanity",
  schema: { types: schemas },
  plugins: [deskTool(), visionTool({ defaultApiVersion: "2023-03-04" })],
});
