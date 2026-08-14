import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://www.surenmah.ir";

  const blogSlugs = [
    "vitiligo",
    "acne",
    "dry-skin",
    "eczema",
    "dermatitis",
    "wart",
    "boil",
    "fungus",
    "hives",
    "impetigo",
    "latex-allergy",
    "melasma",
    "psoriasis",
    "shingles",
    "zoster",
  ];

  const blogPages: MetadataRoute.Sitemap =
    blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/analyze`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...blogPages,
  ];
}