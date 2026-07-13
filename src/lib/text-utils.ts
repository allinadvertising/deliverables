// Generic text/slug/date-inference helpers shared by every enhancement
// pipeline (markdown, HTML, ...). Not specific to any one source format.

export function normalizeText(value?: string) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

export function stripExtension(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "");
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function titleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function normalizeHttpUrl(value?: string) {
  const text = normalizeText(value);

  if (!text) {
    return "";
  }

  try {
    const parsed = new URL(text);

    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
  } catch {
    return "";
  }

  return "";
}

/** Finds a month/year in free text (e.g. "May 2026", "2026-05"), falling back to `fallback`. */
export function inferDateFromText(text: string, fallback: Date, timeZone: string) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthPattern = monthNames.join("|");
  const monthYear = text.match(
    new RegExp(`\\b(${monthPattern})\\s+(?:\\d{1,2},\\s*)?(20\\d{2})\\b`, "i"),
  );

  if (monthYear) {
    const monthIndex = monthNames.findIndex(
      (month) => month.toLowerCase() === monthYear[1].toLowerCase(),
    );

    if (monthIndex >= 0) {
      return {
        monthName: monthNames[monthIndex],
        monthNumber: monthIndex + 1,
        year: Number(monthYear[2]),
      };
    }
  }

  const numericDate = text.match(/\b(20\d{2})[-/](0?[1-9]|1[0-2])(?:[-/]\d{1,2})?\b/);

  if (numericDate) {
    const monthNumber = Number(numericDate[2]);

    return {
      monthName: monthNames[monthNumber - 1],
      monthNumber,
      year: Number(numericDate[1]),
    };
  }

  const monthNumber = Number(
    new Intl.DateTimeFormat("en", {
      month: "numeric",
      timeZone,
    }).format(fallback),
  );

  return {
    monthName: new Intl.DateTimeFormat("en", {
      month: "long",
      timeZone,
    }).format(fallback),
    monthNumber,
    year: Number(
      new Intl.DateTimeFormat("en", {
        timeZone,
        year: "numeric",
      }).format(fallback),
    ),
  };
}
