import React from 'react';

const flavorText = [
    "Now You're Thinking With Colors",
    // "Now You're Cooking with Colors",
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
                <a href='#'>Github Repo</a>
                </li>
                <li>
                    <a href='#'>Contact Us</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;