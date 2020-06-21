import React, { Component } from 'react';
import Gallery from './Gallery';
import CakePop from '../assets/images/cakepops.jpg';
import CupCakes from '../assets/images/cupcakes.jpg';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="parallax"></div>
                </section>
                <section>
                    <div className="container">
                        <div className="row square-decal">
                            <div className="col-sm-12 col-md-7">
                                <img src={CakePop} alt="cake pops" className="custom-img-1" />
                                <p className="content-paragraph padding-bottom offset-top">Dolcetti’s ultimate goal is to satisfy our clients and their sweet taste buds. Our cakery provides superior products, being both attractive and yummy! Our regular clients state we are the best, but we never stop developing our recipes. We continue exploring this fascinating sweet world!</p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="custom-img-2">
                                    <img src={CupCakes} alt="cupcakes"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="beige">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 offset-top">
                                <h1 className="subheading">How we <br />started baking?</h1>
                                <p className="content-paragraph">Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diego, California’s finest cake, and pastry bakeries.</p>
                                <p className="content-paragraph">Our cake bakery adds only the freshest ingredients to make our baked goods taste a fresh-out-of-oven like experience. An experience, that simply melts in your mouth.</p>
                                <p className="content-paragraph">For instance, when we bake our famous whipped cream cakes, we use only pure cream and the best brown sugar on the market. Also, we always buy the freshest fruits to make our pie fillings or our pastry menu items…</p>
                            </div>
                            <div className="col-sm-12 col-md-5">

                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p className="content-paragraph">Photo links of baking categories</p>
                </section>
                <section>
                    <div className="parallax">
                        <div className="overlay-container">
                            <p className="content-paragraph text-center text-overlay">Dolcetti is<span className="heading">&nbsp;a family owned bakery,</span> which treasures the atmosphere.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="subheading text-center offset-bottom">Our Gallery</h1>
                    <div className="gallery-container">
                        <Gallery />
                    </div>
                </section>
                <section className="light-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 offset-top">
                                <h1 className="subheading">Most popular<br />cakes we have!</h1>
                                <p className="content-paragraph">Owned by a famous Vermont baker, Denise Levine, our place is proud to be one of San Diego, California’s finest cake, and pastry bakeries.</p>
                                <p className="content-paragraph">Our cake bakery adds only the freshest ingredients to make our baked goods taste a fresh-out-of-oven like experience. An experience, that simply melts in your mouth.</p>
                                <p className="content-paragraph">For instance, when we bake our famous whipped cream cakes, we use only pure cream and the best brown sugar on the market. Also, we always buy the freshest fruits to make our pie fillings or our pastry menu items…</p>
                            </div>
                            <div className="col-sm-12 col-md-5">

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>  
        )
    }
}
