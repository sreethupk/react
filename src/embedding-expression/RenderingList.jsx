import React from 'react'

const RenderingList = () => {
    const fruits = ["apple", "bananan", "mango"];
    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderingList