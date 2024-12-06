import React from 'react'

function PageLayout({header, children, footer}) {
    return (
        <div>
            <h1>{header}</h1>
            <p>{children}</p>
            <p>{footer}</p>
        </div>
    )
}

export default PageLayout