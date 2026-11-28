import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bangaloresuperstrikersfc.com";

  const routes: { path: string; freq: "daily" | "weekly" | "monthly"; priority: number }[] = [
    { path: "",                      freq: "daily",   priority: 1.0 },
    { path: "/about",                freq: "weekly",  priority: 0.9 },
    { path: "/technical_team",       freq: "weekly",  priority: 0.8 },
    { path: "/achievements",         freq: "weekly",  priority: 0.8 },
    { path: "/programs",             freq: "weekly",  priority: 0.8 },
    { path: "/academy_training",     freq: "weekly",  priority: 0.8 },
    { path: "/school_university",    freq: "weekly",  priority: 0.7 },
    { path: "/agewise_progression",  freq: "weekly",  priority: 0.7 },
    { path: "/summer_camp",          freq: "weekly",  priority: 0.7 },
    { path: "/players",              freq: "weekly",  priority: 0.7 },
    { path: "/blogs",                freq: "daily",   priority: 0.7 },
    { path: "/gallery",              freq: "weekly",  priority: 0.6 },
    { path: "/contact",              freq: "weekly",  priority: 0.8 },
    { path: "/privacy_policy",       freq: "monthly", priority: 0.3 },
    { path: "/refund_policy",        freq: "monthly", priority: 0.3 },
    { path: "/terms_and_conditions", freq: "monthly", priority: 0.3 },
  ];

  return routes.map(({ path, freq, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
