import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bangaloresuperstrikersfc.com";
  const routes = [
    "",
    "/about",
    "/programs",
    "/academy_training",
    "/school_university",
    "/agewise_progression",
    "/summer_camp",
    "/blogs",
    "/gallery",
    "/technical_team",
    "/contact",
    "/privacy_policy",
    "/refund_policy",
    "/terms_and_conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blogs" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/programs") || route === "/contact" ? 0.8 : 0.6,
  }));
}
