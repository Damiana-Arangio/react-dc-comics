import dcCategories from "../data/dcCategories"

/* Definizione componente MyHeader */
function MyHeader() {

    return (

        <header className="container flex-container-row justify-between align-items-center">

            {/* LOGO */}
            <figure>
                <a href="#"> <img src="src/assets/img/dc-logo.png" alt="logo" id="logo-small" /></a>
            </figure>

            {/* BARRA DI NAVIGAZIONE */}
            <nav>
                <ul className="flex-container-row gap-20">
                    {dcCategories.map((dcCategory) => (
                        <li key={dcCategory.id}>
                            <a href={dcCategory.url} className={dcCategory.selected ? "active text-light-blue" : ""}>
                                {dcCategory.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>

    )
}

/* Esportazione componente MyHeader */
export default MyHeader