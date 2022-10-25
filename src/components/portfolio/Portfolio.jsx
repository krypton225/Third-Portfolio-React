import "./index.scss";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="row">

                    <h2 className="portfolio__title">portfolio</h2>

                    <div className="portfolio__info">
                        <div className="portfolio__info__product">
                            <img src="./assets/images/portfolio/pic-1.jpg" alt="Product 1" />
                            <div className="portfolio__info__product__desc">
                                <h4 className="portfolio__info__product__desc__title">product 1</h4>
                                <h5 className="portfolio__info__product__desc__category">web design</h5>
                            </div>
                        </div>

                        <div className="portfolio__info__product">
                            <img src="./assets/images/portfolio/pic-2.jpg" alt="Product 2" />
                            <div className="portfolio__info__product__desc">
                                <h4 className="portfolio__info__product__desc__title">product 2</h4>
                                <h5 className="portfolio__info__product__desc__category">web development</h5>
                            </div>
                        </div>

                        <div className="portfolio__info__product">
                            <img src="./assets/images/portfolio/pic-3.jpg" alt="Product 3" />
                            <div className="portfolio__info__product__desc">
                                <h4 className="portfolio__info__product__desc__title">product 3</h4>
                                <h5 className="portfolio__info__product__desc__category">UI / UX</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portfolio
