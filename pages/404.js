import React from 'react'

const Error = ({ router }) => {
    return (
        <div className="error_404">
            <p>404 - Page Not Found</p>
            <button onClick={() => router.push("/")}className="button">Go Home</button>
        </div>
    )
}

export default Error