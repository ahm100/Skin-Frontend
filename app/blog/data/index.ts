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
import { wart } from "./wart";
import { dermatitis } from "./dermatitis";
import { fungus } from "./fungus";
import { hives } from "./hives";
import { impetigo } from "./impetigo";
import { melasma } from "./melasma";
import { latexAllergy } from "./latex-allergy";
import { psoriasis } from "./psoriasis";
import { shingles } from "./shingles";
import { eczema } from "./eczema";

export const blogArticles: BlogArticle[] = [
  vitiligo,
  acne,
  drySkin,
  wart,
  dermatitis,
  fungus,
  hives,
  impetigo,
  latexAllergy,
  melasma,
  psoriasis,
  shingles,
  eczema,
];