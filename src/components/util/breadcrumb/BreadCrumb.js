import React from 'react';

const Breadcrumb = (props) => {
    let children = React.Children.toArray(props.children)

    console.log('children', children)
  
    // children = children.map((child, index) => (
    //   <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
    // ))
  
    return <ol>{children}</ol>
  }
  
  export default Breadcrumb