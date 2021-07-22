import React, { useEffect } from 'react'
function Nav(props) {
    const { categories = [], setCurrentCategory, currentCategory } = props;
    useEffect(() => {
        document.title = currentCategory.name
    })
    return (
        <header className="flex-row px-1">
            <h2>Jagraj Singh</h2>
            <nav className="nav-style">
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }}> {category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
export default Nav;