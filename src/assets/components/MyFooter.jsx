/* Definizione componente MyFooter */
function MyFooter() {
    return (
        <>

            {/* SEZIONE - FOOTER TOP */}

            <section className="footer-top">

                <div className="container flex-container-row justify-between ">

                    {/* Barra di navigazione*/}
                    <nav className="flex-container-row gap-20">

                        {/* DC COMICS e SHOP */}
                        <div>
                            <h2 className="text-white"> DC COMICS </h2>
                            <ul>
                                <li> <a href="#"></a> Characters </li>
                                <li> <a href="#"></a> Comics </li>
                                <li> <a href="#"></a> Movies </li>
                                <li> <a href="#"></a> TV </li>
                                <li> <a href="#"></a> Games </li>
                                <li> <a href="#"></a> Videos </li>
                                <li> <a href="#"></a> News </li>
                            </ul>

                            <h2 className="text-white"> SHOP </h2>
                            <ul>
                                <li> <a href="#"></a> Shop DC </li>
                                <li> <a href="#"></a> Shop DC Collectibles </li>
                            </ul>
                        </div>

                        {/* DC */}
                        <div>
                            <h2 className="text-white"> DC </h2>
                            <ul>
                                <li> <a href="#"></a> Terms of Use </li>
                                <li> <a href="#"></a> Privacy policy (New) </li>
                                <li> <a href="#"></a> Ad Choices </li>
                                <li> <a href="#"></a> Advertising </li>
                                <li> <a href="#"></a> Jobs </li>
                                <li> <a href="#"></a> Subscriptions </li>
                                <li> <a href="#"></a> Talent Workshops </li>
                                <li> <a href="#"></a> CPSC Certificates </li>
                                <li> <a href="#"></a> Ratings  </li>
                                <li> <a href="#"></a> Shop Help </li>
                                <li> <a href="#"></a> Contact Us </li>
                            </ul>
                        </div>

                        {/* SITES */}
                        <div>
                            <h2 className="text-white"> SITES </h2>
                            <ul>
                                <li> <a href="#"></a> DC </li>
                                <li> <a href="#"></a> MAD Magazine (New) </li>
                                <li> <a href="#"></a> DC Kids </li>
                                <li> <a href="#"></a> DC Universe </li>
                                <li> <a href="#"></a> DC Power Visa </li>
                            </ul>
                        </div>
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