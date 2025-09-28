import dcComics from "../data/dcComics"
import shops from "../data/shops"
import dc from "../data/dc"
import sites from "../data/sites"

/* Definizione componente MyFooter */
function MyFooter() {
    return (
        <>

            {/* SEZIONE - FOOTER TOP */}

            <section className="footer-top">

                <div className="container flex-container-row justify-between ">

                    {/* Barra di navigazione*/}
                    <nav className="flex-container-row gap-20">

                        <div>

                            {/* DC COMICS */}
                            { dcComics.map((dcComic, index) => (
                                <div key={"dcComic" + index}>
                                    <h2 className="text-white"> {dcComic.title} </h2>

                                    {dcComic.linksDcComics.map (linkDcComics => (
                                        <ul key={linkDcComics.id}>
                                            <li> 
                                                <a className="text-grey" href={linkDcComics.url}>
                                                    {linkDcComics.label}
                                                </a> 
                                            </li>
                                        </ul> 
                                    ))}
                                </div>
                            ))}

                            {/* SHOP */}
                            {shops.map((shop, index) => (
                                <div key={"shop" + index}>
                                    <h2 className="text-white"> {shop.title} </h2>

                                    {shop.linksShops.map(linkShops => (
                                        <ul key={linkShops.id}>
                                            <li>
                                                <a className="text-grey" href={linkShops.url}>
                                                    {linkShops.label}
                                                </a>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            ))}

                        </div>

                        {/* DC */}
                        {dc.map((dcItem, index) => (
                            <div key={"dc" + index}>
                                <h2 className="text-white"> {dcItem.title} </h2>

                                {dcItem.linksDc.map(linkDc => (
                                    <ul key={linkDc.id}>
                                        <li>
                                            <a className="text-grey" href={linkDc.url}>
                                                {linkDc.label}
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        ))}

                        {/* SITES */}
                        {sites.map((site, index) => (
                            <div key={"sites" + index}>
                                <h2 className="text-white"> {site.title} </h2>

                                {site.linksSites.map(linkSites => (
                                    <ul key={linkSites.id}>
                                        <li>
                                            <a className="text-grey" href={linkSites.url}>
                                                {linkSites.label}
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        ))}

                    </nav>

                    {/* Immagine logo sfondo */}
                    <figure>
                        <img className="logo-sfondo" src="src/assets/img/dc-logo-bg.png" alt="" />
                    </figure>
                </div>


            </section>

            {/* SEZIONE - FOOTER BOTTOM */}
            <section className="footer-bottom">
                <div className="container flex-container-row justify-between align-items-center">

                    {/* Bottone */}
                    <button className="bottone-footer-bottom">
                        SIGN-UP-NOW!
                    </button>

                    {/* Link Social */}
                    <nav>
                        <ul className="flex-container-row gap-20">
                            <li> <a href="#" className="follow-us text-light-blue"> FOLLOW US </a> </li>
                            <li> <a href="#"> <img src="src/assets/img/footer-facebook.png" alt="Logo Facebook" /> </a> </li>
                            <li> <a href="#"> <img src="src/assets/img/footer-twitter.png" alt="Logo Twitter" /> </a> </li>
                            <li> <a href="#"> <img src="src/assets/img/footer-youtube.png" alt="Logo youTube" /> </a> </li>
                            <li> <a href="#"> <img src="src/assets/img/footer-pinterest.png" alt="Logo Pinterest" /> </a> </li>
                            <li> <a href="#"> <img src="src/assets/img/footer-periscope.png" alt="Logo Periscope" /> </a> </li>
                        </ul>
                    </nav>
                </div>
            </section>

        </>
    )
}

/* Esportazione componente MyFooter */
export default MyFooter