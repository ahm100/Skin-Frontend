export const conditionBlogMap: Record<string, string> = {
  vitiligo: "/blog/vitiligo",
  acne: "/blog/acne",
  "dry skin": "/blog/dry-skin",
  dryness: "/blog/dry-skin",
  eczema: "/blog/eczema",
  dermatitis: "/blog/dermatitis",
  wart: "/blog/wart",
  warts: "/blog/wart",
  boil: "/blog/boil",
  furuncle: "/blog/boil",
  fungus: "/blog/fungus",
  "skin fungus": "/blog/fungus",
  hives: "/blog/hives",
  urticaria: "/blog/hives",
  impetigo: "/blog/impetigo",
  "latex allergy": "/blog/latex-allergy",
  melasma: "/blog/melasma",
  psoriasis: "/blog/psoriasis",
  shingles: "/blog/shingles",
  zoster: "/blog/shingles",
  candidiasis: "/blog/candidiasis",
  actinicKeratosis: "/blog/actinicKeratosis",
};

export function getConditionBlogUrl(
  label?: string | null
): string | null {
  if (!label) {
    return null;
  }

  const normalized = label
    .trim()
    .toLowerCase();

  return conditionBlogMap[normalized] ?? null;
}