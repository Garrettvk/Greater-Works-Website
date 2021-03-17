import 'styles/App.css';

// image imports
import logo from "images/construction-logo.png";
import tools from "images/tools.jpg";
import before_after from "images/Before-4.jpg";
import design from "images/design1.jpg";
import rails from "images/rails1.jpg";
import trim from "images/trim1.jpg";
import repairs from "images/repairs1.jpg";

// components
import Form from 'components/form/Form';
import ImageSlider from 'components/slideshow/ImageSlider';
import { SliderData } from 'components/slideshow/SliderData';


function App() {
    return (

        <div className="container">

            {/* company logo */}
            <img src={logo} alt="logo" className="logo" />

            {/* first image */}
            <img src={tools} alt="" className="image1" />

            <div id="content1">

                <b className="content__title">Welcome!</b>

                <p className="content__body">We are a licensed, bonded and insured General Contracting company. Local to the Central Coast, we specialize in:</p>

                <ul>
                    <li> Remodels and additions</li>
                    <li> Escrow request for repairs</li>
                    <li> Home repairs</li>
                    <li> Tile installation</li>
                    <li> Floor installation</li>
                    <li> Drywall texture matching</li>
                    <li> Baseboards, trim and paint</li>
                </ul>

            </div>

            {/* second image */}
            <img src={before_after} alt="" className="image2" />

            {/* container for before and after text */}
            <div className="before-after">
                <p>Before</p>
                <p>After</p>
            </div>

            <div id="content2">

                <b className="content__title">Kitchen & Bath Remodel</b>

                <p className="content__body">
                    We can transform any room in your house from tired to fabulous. Even an open
                    concept kitchen is not as
                    costly as you might think. With some preliminary reviews of your current home, we can give you a
                    free
                    estimate, along with options to make your dreams come true.
                </p>

            </div>

            {/* third image */}
            <img src={design} alt="" className="image3" />

            <div id="content3">

                <b className="content__title">Design | Build</b>

                <p className="content__body">
                    Taking time up front to think through your design ideas will save you time and
                    money! We will work with you and your designer to ensure your project will be done just right,
                    on time and on budget.
                </p>

                <p className="content__body">
                    If you are a do-it-yourself type, we can assist with some of the more
                    specialized trades. Give you that added help to get your project done, and looking just right.
                </p>

            </div>

            {/* fourth image */}
            <img src={rails} alt="" className="image4" />

            <div id="content4">

                <b className="content__title">Metal Stairs & Railings</b>

                <p className="content__body">
                    For those who are looking for a modern, sleek look, we can build and install
                    metal stairs and rails. Unlike
                    store bought metal railing systems, our design uses solid metal rails, not the bulky wires. They
                    can even be
                    anodized or coated to a variety of colors to match your current interior design.
                </p>

            </div>

            {/* fifth image */}
            <img src={trim} alt="" className="image5" />

            <div id="content5">

                <b className="content__title">Custom Trim Fabrication</b>

                <p className="content__body">
                    Custom homes require custom trim. If your current builder is installing cut to
                    length trim, you are selling
                    yourself short. We can fabricate custom designed window and opening trim to compliment your
                    design needs.
                    You can have your contractor install our units and truly dress up your finish look.
                </p>

            </div>

            {/* sixth image */}
            <img src={repairs} alt="" className="image6" />

            <div id="content6">

                <b className="content__title">Escrow Repair Specialists</b>

                <p className="content__body">
                    You just had a home inspection and have days before closing escrow. Sound
                    familiar? We have experienced
                    crews and licensed subs available for a quick response.
                </p>

                <p className="content__body">
                    Call or text, we can help.
                </p>

                <a href="tel:18054007129">(805) 400-7129</a>

            </div>

            <ImageSlider slides={SliderData} />

            <div className="contact">

                <h4 className="contact__title">Contact Us</h4>

                <div className="contact__info">

                    <div className="contact__email">
                        <i className="fa fa-envelope contact__icon"></i>
                        <p>greaterworks805@gmail.com</p>
                    </div>

                    <div className="contact__address">
                        <i className="fa fa-map-marker contact__icon"></i>
                        <p>Greater Works Construction, Inc.</p>
                        <p>7343 El Camino Real, Suite 223</p>
                        <p>Atascadero, CA 93422</p>
                        <p>CSLB 1040332</p>
                    </div>

                    <div className="contact__phone">
                        <i className="fa fa-phone contact__icon"></i>
                        <p>(805) 400-7129</p>
                    </div>

                </div>

            </div>

            <Form className="contact__form" />

            <div className="links">

                <h4 className="links__title">ADDITIONAL LINKS</h4>

                <div className="links__content">
                    <a href="https://www.cnbc.com/2017/03/09/buyer-beware-those-picture-perfect-flipped-homes-can-be-masked-money-pits.html">Buyer beware of flips</a>
                    <a href="http://sacramentoappraisalblog.com/2015/07/21/5-reasons-why-appraisers-call-for-repairs-to-be-made/">Why appraisers call for repairs</a>
                    <a href="http://money.com/money/5659167/house-flipping-hgtv-ftc-complaint-zurixx/">Make Money Flipping Houses?</a>
                    <a href="https://www.opendoor.com/w/home-improvement-value-calculator">Home Improvement Value Calculator</a>
                    <a href="https://realestate.boston.com/home-improvement/2019/10/30/home-improvement-that-doesnt-pay-off-resale/">Home Improvement Projects Don't Pay Off at Resale</a>
                    <a href="https://www.marketwatch.com/story/four-home-improvement-projects-you-should-never-do-yourself-11607629107">Four Home Improvement Projects You Should Never Do Yourself</a>
                    <a href="https://www.haywardscore.com/articles/ask-an-expert-bleach-and-mold/">Ask an expert: bleach and mold</a>
                </div>

            </div>

        </div>

    );
}

export default App;
