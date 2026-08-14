export type BlogSection = {
  title: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  englishTitle: string;
  description: string;
  intro: string;
  sections: BlogSection[];
  faq: {
    question: string;
    answer: string;
  }[];
};

import { vitiligo } from "./vitiligo";
import { acne } from "./acne";
import { drySkin } from "./dry-skin";

export const blogArticles: BlogArticle[] = [
  vitiligo,
  acne,
  drySkin,
];