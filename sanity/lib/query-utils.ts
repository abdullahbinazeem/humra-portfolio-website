import { groq } from "next-sanity";
import { client } from "./client";
import { Education } from "@/types/Education";

export async function getEducation(): Promise<Education[]> {
  return client.fetch(
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
