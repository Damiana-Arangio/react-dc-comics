
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
                    <li> <a href="#"></a> CHARACTERS </li>
                    <li> <a href="#"></a> COMICS </li>
                    <li> <a href="#"></a> MOVIES </li>
                    <li> <a href="#"></a> TV </li>
                    <li> <a href="#"></a> GAMES </li>
                    <li> <a href="#"></a> COLLECTIBLES </li>
                    <li> <a href="#"></a> VIDEOS </li>
                    <li> <a href="#"></a> FANS </li>
                    <li> <a href="#"></a> NEWS </li>
                    <li> <a href="#"></a> SHOP </li>
                </ul>
            </nav>

        </header>

    )
}

/* Esportazione componente MyHeader */
export default MyHeader