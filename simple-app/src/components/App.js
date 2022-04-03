import { ContentBlocks } from './ContentBlocks';
import { Links } from './Links';
import { Contact } from './Contact';
import 'styles/App.css';

// image imports
import logo from "images/construction-logo.png";

// components
import Form from 'components/form/Form';

function App() {
    return (

        <div className="container">

            {/* company logo */}
            <img src={logo} alt="logo" className="logo" />
            
            <ContentBlocks />

            <Contact />

            <Form className="contact__form" />

            <Links />

        </div>

    );
}

export default App;