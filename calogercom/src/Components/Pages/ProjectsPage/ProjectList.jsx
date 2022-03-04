import React from 'react'
import { CssIconBlock, HtmlIconBlock, JavaIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, SpringIconBlock, SqlIconBlock, TypeScriptIconBlock } from '../../Terminal/LanguageIcons'
import ProjectCard from './ProjectCard'

const projects = [
  {
      url: "Budgie",
      title: "Budgie",
      summary: "An expense tracker with data visualization and the ability to add/remove expenses and incomes while displaying graphs based on the input data.",
      tags: [
          "Full Stack", 
          "Data Visualization"
      ],
      icons: [
          <ReactIconBlock />, 
          <JavaIconBlock />, 
          <SpringIconBlock/>,
      ]
  },

  {
      url: "emilysite",
      title: "Graphic Designer's Portfolio",
      summary: "A completed website to show a Graphic Designer's portfolio.",
      tags: [
          "Website", 
          "Front End"
      ],
      icons: [
          <PhpIconBlock />,
          <HtmlIconBlock />,
          <CssIconBlock />,
      ]
  },

  {
      url: "shortcake",
      title: "Shortcake",
      summary: "Shortcake is a simple API for shortening and sharing URLs.",
      tags: [
          "API", 
          "Back End"
      ],
      icons: [
          <JavaScriptIconBlock />,
          <NodeIconBlock />,
          <SqlIconBlock />,
      ]
  },

  {
      url: "helpdesk",
      title: "University Helpdesk",
      summary: "A PHP-based helpdesk prototype.",
      tags: [
          "Authentication", 
          "Full Stack"
      ],
      icons: [
          <PhpIconBlock />,
          <HtmlIconBlock />,
          <CssIconBlock />,
      ]
  },

  {
      url: "instantchat",
      title: "Instant Chat",
      summary: "A Node & React real-time chat application.",
      tags: [
          "Front End", 
          "Full Stack",
          "Web Sockets"
      ],
      icons: [
          <TypeScriptIconBlock />,
          <ReactIconBlock />,
          <NodeIconBlock />,
      ]
  },

  {
      url: "Canyon",
      title: "Canyon",
      summary: "A VanillaJS front-end framework that allows you to define components and dynamically render them when certain actions take place. Combines a state container with the observer pattern.",
      tags: [
          "Vanilla JavaScript", 
          "Front End",
          "Framework"
      ],
      icons: [
          <JavaScriptIconBlock />,
      ]
  },

]

export default function ProjectList() {
  return (
    <>
      {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />
      })}
    </>
  )
}
