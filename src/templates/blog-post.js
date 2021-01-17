import React from "react"

export default function template({data})
{

    const post = data.markdownRemark
    return (
        <div>
            <hr /> 
            <h1>
                {post.frontmatter.title}
            </h1>
            <h4>POsted by {post.frontmatter.Author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ _html: post.html}} />
        </div>
    
    )
}

export const postQuery = graphql `
query BlogPostByPath($path: String !){
    markdownRemark(frontmatter: {path: {eq: $path}}){
        html
        frontmatter{
            path
            title
            Author
            date
        }

    }
}
`