import React from 'react'
import BlogCard from './BlogCard'

export default function BlogList() {
    const blogs = [
        // {
        //     url: "spring-react-guide",
        //     title: "Serving a React App with Spring Framework",
        //     tags: ["Full Stack"],
        //     summary: "A guide on how to avoid using Thymeleaf or Views and supporting React-Router to serve your front-end code."
        // },
        {
            url: "buildsheet-editor",
            title: "BuildSheet Editor",
            tags: ["Desktop Application"],
            summary: "A deep-dive into designing and deploying the Buildsheet Editor."
        },
        {
            url: "automating-account-creation",
            title: "Automating Account Creation",
            tags: ["IT", "Scripting"],
            summary: "An exploration of automating an IT account creation process from a manual process."
        },
    ]
  return (
    <>
        {blogs.map((blog, index) => {
            return <BlogCard key={index} {...blog} />
        })}
    </>
  )
}
