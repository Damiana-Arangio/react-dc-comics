import comics from "../comics"

/* Definizione componente MyMain */
function MyMain() {

    return (

        <main>

            {/* Sezione card fumetti */}
            <section className="section-comics ">
                <div className="container-small flex-container-row flex-wrap gap-20">

                    {/* Card comics */}
                    {comics.map(comic => (
                        <div key={comic.id} className="container-card-comics">
                            <img className="card" src={comic.thumb} alt={comic.series} />
                        </div>
                    ))}

                </div>
            </section>

            {/* Barra di navigazione */}
            <nav className="nav-main">
                <ul className="container flex-container-row justify-aroud ">

                    <li>
                        <a href="#">
                            <img className="img-nav-main" src="src/assets/img/buy-comics-digital-comics.png" alt="Digital comics" />
                            <span className="text-white"> DIGITAL COMICS </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img className="img-nav-main" src="src/assets/img/buy-comics-merchandise.png" alt="Buy comics merchandise" />
                            <span className="text-white"> DC MERCHANDISE </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img className="img-nav-main" src="src/assets/img/buy-comics-subscriptions.png" alt="Buy comics subscriptions" />
                            <span className="text-white"> SUBSCRIPTION </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img className="img-nav-main" src="src/assets/img/buy-comics-shop-locator.png" alt="Buy comics shop locator" />
                            <span className="text-white"> COMIC SHOP LOCATOR </span>
                        </a>
                    </li>

                    <a href="#">
                        <img className="img-nav-main" src="src/assets/img/buy-dc-power-visa.png" alt="Buy dc power visa" />
                        <span className="text-white"> DC POWER VISA </span>
                    </a>


                </ul>
            </nav>
        </main>
    )
}

/* Esportazione componente MyMain */
export default MyMain