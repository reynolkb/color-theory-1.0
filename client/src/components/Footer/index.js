import React from 'react';

const flavorText = [
    "Now You're Thinking With Colors",
    "You’ll hue the day!",
    "You hue me for a loop.",
    "Pantone deaf"
];

const Footer = () => {

    const randomFlavor = flavorText[Math.round(Math.random() * flavorText.length)]

    return(
        <footer>
            <h3>{randomFlavor}</h3>
            <ul>
                <li>
                    <a href='#'>About The Creators</a>
                </li>
                <li>
                <a href='https://github.com/reynolkb/color-theory-1.0'>Github Repo</a>
                </li>
                <li>
                    <a href='mailto:colortheory@gmail.com'>Contact Us</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;