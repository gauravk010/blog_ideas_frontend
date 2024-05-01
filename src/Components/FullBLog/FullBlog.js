import React from 'react'

const FullBlog = (props) => {
  return (
    <div className="container">
        <div className="row">
           {props.blog_title}
        </div>
    </div>
  )
}

export default FullBlog