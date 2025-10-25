import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ha", "yo", "ig"],

	// Used when no locale matches
	defaultLocale: "en",
});
