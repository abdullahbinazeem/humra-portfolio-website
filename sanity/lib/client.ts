import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-03-04",
  projectId: "8at4agk2",
  dataset: "sanity",
});
