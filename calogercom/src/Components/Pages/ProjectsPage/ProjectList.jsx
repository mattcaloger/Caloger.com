import React from "react";
import * as LanguageIcon from "../../Terminal/LanguageIcons";
import ProjectCard from "./ProjectCard";
import IconImage from "../../Layout/IconImage";

const projects = [
  {
    url: "stasher",
    title: "Stasher",
    summary: "A secure message sharing service.",
    tags: ["Security", "Encryption"],
    icons: [
      <IconImage src={LanguageIcon.JavaIcon} />,
      <IconImage src={LanguageIcon.SpringIcon} />,
      <IconImage src={LanguageIcon.TypeScriptIcon} />,
      <IconImage src={LanguageIcon.ReactIcon} />,
    ],
    github: "https://github.com/mattcaloger/Stasher",
    demo: "https://stasher.caloger.com/",
  },
  {
    url: "Budgie",
    title: "Budgie",
    summary:
      "An expense tracker with data visualization and the ability to add/remove expenses and incomes while displaying graphs based on the input data.",
    tags: ["Finance", "Data Visualization"],
    icons: [
      <IconImage src={LanguageIcon.JavaIcon} />,
      <IconImage src={LanguageIcon.SpringIcon} />,
      <IconImage src={LanguageIcon.JavaScriptIcon} />,
      <IconImage src={LanguageIcon.ReactIcon} />,
    ],
    github: "https://github.com/mattcaloger/Budgie",
    demo: "https://budgie.caloger.com/",
    video: "",
  },
  {
    url: "shortcake",
    title: "Shortcake",
    summary: "Shortcake is a simple API for shortening and sharing URLs.",
    tags: ["URL Shortening"],
    icons: [
      <IconImage src={LanguageIcon.JavaScriptIcon} />,
      <IconImage src={LanguageIcon.NodeIcon} />,
      <IconImage src={LanguageIcon.AngularIcon} />,
    ],
    github: "https://github.com/mattcaloger/Shortcake",
    demo: "",
  },
  {
    url: "BookDB",
    title: "BookDB",
    summary: "Categorize books with uploadable covers.",
    tags: ["File Management"],
    icons: [
      <IconImage src={LanguageIcon.CSharpIcon} />,
      <IconImage src={LanguageIcon.DotnetIcon} />,
      <IconImage src={LanguageIcon.AngularIcon} />,
    ],
    github: "https://github.com/mattcaloger/BookDB",
  },

  {
    url: "emilysite",
    title: "Graphic Designer's Portfolio",
    summary: "A completed website to show a Graphic Designer's portfolio.",
    tags: ["Website"],
    icons: [
      <IconImage src={LanguageIcon.PhpIcon} />,
      <IconImage src={LanguageIcon.HtmlIcon} />,
      <IconImage src={LanguageIcon.CssIcon} />,
    ],
    github: "https://github.com/mattcaloger/EmilyDesignPortfolio",
  },

  {
    url: "helpdesk",
    title: "University Helpdesk",
    summary: "A PHP-based helpdesk prototype.",
    tags: ["Authentication"],
    icons: [
      <IconImage src={LanguageIcon.PhpIcon} />,
      <IconImage src={LanguageIcon.HtmlIcon} />,
      <IconImage src={LanguageIcon.CssIcon} />,
    ],
    github: "https://github.com/mattcaloger/University-Helpdesk",
  },

  {
    url: "instantchat",
    title: "Instant Chat",
    summary: "A Node & React real-time chat application.",
    tags: ["Web Sockets"],
    icons: [
      <IconImage src={LanguageIcon.TypeScriptIcon} />,
      <IconImage src={LanguageIcon.NodeIcon} />,
      <IconImage src={LanguageIcon.ReactIcon} />,
    ],
    github: "https://github.com/mattcaloger/Instant-Chat",
  },

  {
    url: "Canyon",
    title: "Canyon",
    summary:
      "A VanillaJS front-end framework that allows you to define components and dynamically render them when certain actions take place. Combines a state container with the observer pattern.",
    tags: ["Framework"],
    icons: [<IconImage src={LanguageIcon.JavaScriptIcon} />],
    github: "https://github.com/mattcaloger/CanyonJS",
  },
];

export default function ProjectList() {
  return (
    <>
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}
    </>
  );
}
