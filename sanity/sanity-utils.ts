import { createClient, groq } from "next-sanity";
import { project } from "@/types/project";
import { page } from "@/types/page";
import { skill } from "@/types/skill";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`
  );
}

export async function getProject(slug: string): Promise<project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`,
    { slug }
  );
}

export async function getPages(): Promise<page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
    }`,
    { slug }
  );
}

export async function getSkills(): Promise<skill[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
    }`
  );
}
