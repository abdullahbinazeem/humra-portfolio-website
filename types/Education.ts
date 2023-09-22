import { PortableTextBlock } from "sanity";

export type Education = {
  _id: string;
  _createdAt: Date;
  university: string;
  startDate: string;
  endDate: string;
  enrolled: boolean;
  content: PortableTextBlock;
};
