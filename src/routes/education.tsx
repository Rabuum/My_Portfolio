import { createFileRoute } from "@tanstack/react-router";
import { MergedEducationExperiencePage } from "./experience";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Experience — Rabin Giri Civil Engineer" },
      {
        name: "description",
        content: "Merged Academic Education and Professional Experience timeline for Rabin Giri, Civil Engineering graduate from Nepal.",
      },
    ],
  }),
  component: MergedEducationExperiencePage,
});
