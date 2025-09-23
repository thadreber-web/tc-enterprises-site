import { DateTime } from "luxon";
export default function(eleventyConfig) {
  // Passthrough assets
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Nunjucks date filter to fix "filter not found: date"
  eleventyConfig.addFilter("date", (value, fmt = "yyyy") => {
    try {
      if (!value) return DateTime.now().toFormat(fmt);
      const dt = typeof value === "string" ? DateTime.fromISO(value) : DateTime.fromJSDate(value);
      return (dt.isValid ? dt : DateTime.now()).toFormat(fmt);
    } catch {
      return DateTime.now().toFormat(fmt);
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
