import { createClient, groq } from "next-sanity";
import config from "./client";
import { Education } from "@/types/Education";
import { Personal } from "@/types/Personal";
import { Techonologies } from "@/types/Technologies";
import { Work } from "@/types/Work";

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

export async function getTechnologies(): Promise<Techonologies[]> {
  return createClient(config).fetch(
    groq`*[_type == "technologies" && !highlighted]{
        _id,
        _createdAt,
        name,
        "icon": icon.asset->url,
        "icon-alt": icon.alt,
        years,
        highlighted,
        description,
      }
        `,
  );
}

export async function getHighlightedTechnologies(): Promise<Techonologies[]> {
  return createClient(config).fetch(
    groq`*[_type == "technologies" && highlighted][0...3]{
        _id,
        _createdAt,
        name,
        "icon": icon.asset->url,
        years,
        highlighted,
        description,
      }
        `,
  );
}

export async function getWork(): Promise<Work[]> {
  return createClient(config).fetch(
    groq`*[_type == "work"]{
        _id,
        _createdAt,
        title,
        "image": image.asset->url,
        "image-alt": image.alt,
        description,
        startDate,
        current,
        url,
      }
        `,
  );
}

export async function getContact(): Promise<Personal> {
  return createClient(config).fetch(
    groq`*[_type == "contact"][0]{
        _id,
        _createdAt,
        first_name,
        last_name,
        intro_sentence,
        intro_description,
        about_description,
        email,
        phone_number,
      }
        `,
  );
}
