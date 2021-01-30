import React from 'react';

const flavorText = [
    "You’ll hue the day!",
    "Now You're Thinking With Colors",
    "You hue me for a loop.",
    "Pantone deaf",
    "I am only hue man.",
    "Colors laugh by saying, 'Hue Hue Hue.'",
    "Color me impressed.",
];

const Footer = () => {

    const randomFlavor = flavorText[Math.round(Math.random() * flavorText.length)]

    return(
        <footer>
            <h2>{randomFlavor}</h2>
            <ul>
                <li>
                    <a href='#'>About The Creators</a>
                </li>
                <li>
                <a href='https://github.com/reynolkb/color-theory-1.0' target='_blank' rel='noreferrer'>Github Repo</a>
                </li>
                <li>
                    <a href='mailto:colortheory@gmail.com'>Contact Us</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;