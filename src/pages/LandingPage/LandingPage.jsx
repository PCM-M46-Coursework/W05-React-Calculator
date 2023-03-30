import './LandingPage.css';

import titleImage from './images/title.png';
import { Calculator } from './components/Calculator';

export default function LandingPage()
{
    return (
        <div className='CalculatorApp'>
            <img className="logo" src={titleImage} alt="React Calculator" title="React Calculator" />
            <Calculator />
        </div>
    );
}