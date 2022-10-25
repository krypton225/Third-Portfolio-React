import { Swiper, SwiperSlide } from 'swiper/react';

import "./index.scss"
import 'swiper/css';

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="row">
                    <h2 className="testimonials__title">Testimonials</h2>

                    <div className="line-row">
                        <Swiper spaceBetween={50} slidesPerView={1} loop grabCursor>

                            <SwiperSlide>
                                <div className="testimonials__card">
                                    <div className="testimonials__card__img">
                                        <img src="./assets/images/testimonials/pic-1.jpg" alt="Person said something in testimonials" />
                                    </div>
                                    <p className="testimonials__card__desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui illum incidunt possimus, sapiente.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials__card">
                                    <div className="testimonials__card__img">
                                        <img src="./assets/images/testimonials/pic-2.jpg" alt="Person said something in testimonials" />
                                    </div>
                                    <p className="testimonials__card__desc">
                                        Lorem ipsum dolor sit amet consectetur uidem ipsum molestiae error distinctio, perspiciatis fugiat ad sint sequi.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials__card">
                                    <div className="testimonials__card__img">
                                        <img src="./assets/images/testimonials/pic-3.jpg" alt="Person said something in testimonials" />
                                    </div>
                                    <p className="testimonials__card__desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui illum incidunt possimus, sapiente ab quidem ipsum molestiae error.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials__card">
                                    <div className="testimonials__card__img">
                                        <img src="./assets/images/testimonials/pic-5.jpg" alt="Person said something in testimonials" />
                                    </div>
                                    <p className="testimonials__card__desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui illum incidunt possimus,  sint sequi.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials__card">
                                    <div className="testimonials__card__img">
                                        <img src="./assets/images/testimonials/pic-6.jpg" alt="Person said something in testimonials" />
                                    </div>
                                    <p className="testimonials__card__desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui illum incidunt possimus, sapiente ab quidem ipsum molestiae error distinctio, perspiciatis fugiat ad sint sequi.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials__card">
                                    <div className="testimonials__card__img">
                                        <img src="./assets/images/testimonials/pic-4.jpg" alt="Person said something in testimonials" />
                                    </div>
                                    <p className="testimonials__card__desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui illum incidunt possimus, sapiente ab quidem ipsum.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
