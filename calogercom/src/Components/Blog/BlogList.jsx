import React from 'react'
import BlogCard from './BlogCard'

export default function BlogList() {
    const blogs = [
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
