import { ContentBlocks } from './ContentBlocks';
import { Links } from './Links';
import { Contact } from './Contact';
import { DemolitionVideo } from './DemolitionVideo';
import 'styles/App.css';

// image imports
import logo from "images/construction-logo.png";

// components
import Form from 'components/form/Form';
import ImageSlider from 'components/slideshow/ImageSlider';
import { SliderData } from 'components/slideshow/SliderData';


function App() {
    return (

        <div className="container">

            {/* company logo */}
            <img src={logo} alt="logo" className="logo" />
            
            <ContentBlocks />

            <ImageSlider slides={SliderData} />

            <DemolitionVideo />

            <Contact />

            <Form className="contact__form" />

            <Links />

        </div>

    );
}

export default App;