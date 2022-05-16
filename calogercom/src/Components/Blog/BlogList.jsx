import React from 'react'
import ProjectCard from '../Pages/ProjectsPage/ProjectCard'
import BlogCard from './BlogCard'

export default function BlogList() {
    const blogs = [
        {
            url: "spring-react-guide",
            title: "Serving a React App with Spring Framework",
            tags: ["Full Stack"],
            summary: "A guide on how to avoid using Thymeleaf or Views and supporting React-Router to serve your front-end code.",
            icons: [],
            writeup: "spring-react-guide"
        },
        {
            url: "buildsheet-editor",
            title: "BuildSheet Editor",
            tags: ["Desktop Application"],
            summary: "A deep-dive into designing and deploying the Buildsheet Editor.",
            icons: [],
            writeup: "buildsheet-editor"
        },
        {
            url: "automating-account-creation",
            title: "Automating Account Creation",
            tags: ["IT", "Scripting"],
            summary: "An exploration of automating an IT account creation process from a manual process.",
            icons: [],
            writeup: "automating-account-creation"
        },
    ]
  return (
    <>
        {blogs.map((blog, index) => {
            return <ProjectCard key={index} {...blog} />
        })}
    </>
  )
}
