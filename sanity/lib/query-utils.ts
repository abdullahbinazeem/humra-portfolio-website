import { createClient, groq } from "next-sanity";
import config from "./client";
import { Education } from "@/types/Education";

export async function getEducation(): Promise<Education[]> {
  return createClient(config).fetch(
    groq`*[_type == "education"]{
        _id,
        _createdAt,
        university,
        startDate,
        endDate,
        enrolled,
        content,
      }
        `,
  );
}
