import comics from "../data/comics"
import Card from "./Card"

/* Definizione componente MyMain */
function MyMain() {

    return (

        <main>

            {/* Hero section */}
            <section className="container hero-section"> </section>
            
            {/* Sezione card fumetti */}
            <section className="section-comics">

                <div className="container-small p-relative flex-container-row flex-wrap gap-15">

                    {/* Etichetta serie attuale */}
                    <h2 className="label-current-series text-white bg-light-blue"> CURRENT SERIES </h2>

                    {/* Card comics */}
                    {comics.map(comic => (

                        <Card 
                            key = {comic.id}
                            src = {comic.thumb}
                            alt = {comic.title}
                            series = {comic.series}
                        />
                        // <div key={comic.id} className="container-card-comics">
                        //     <img className="card" src={comic.thumb} alt={comic.title} />
                        //     <h3 className="text-white"> {comic.series.toUpperCase()} </h3>
                        // </div>
                    ))}

                    <button className="btn-load-more bg-light-blue"> LOAD MORE </button>

                </div>
            </section>

            {/* Barra di navigazione */}
            <nav className="nav-main bg-light-blue">
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