import React from 'react';

//helper
import { getContrastingColor } from '../utils/helpers';

const Preview = ({ palette }) => {
    
    const previewHeader = {
        backgroundColor: palette.primary,
    }

    const previewNav = {
        backgroundColor: palette.secondary,
        color: getContrastingColor(palette.secondary)
    }

    const previewLogo = {
        color: getContrastingColor(palette.primary)
    }

    const previewFooter = {
        backgroundColor: palette.accent1
    }

    const previewLinks = {
        backgroundColor: palette.secondary,
        color: getContrastingColor(palette.secondary)
    }

    const previewCTA ={
        background: `linear-gradient(45deg, ${palette.accent3}, ${palette.primary})`,
        color: getContrastingColor(palette.accent3)
    }

    const circle1 = {
        backgroundColor: palette.primary
    }

    const circle2 = {
        backgroundColor: palette.accent2,
    }

    const circle3 = {
        backgroundColor: palette.accent3
    }


    return(
        <>
            {/* this is the preview */}
            <h4>Website Example</h4>
            <div className='preview-wrapper'>
                <div style={previewHeader} className='preview-navs'>
                    <h6 style={previewLogo}>LOGO</h6>
                    <ul className='preview-ul'>
                        <li><span style={previewNav}>User</span></li>
                        <li><span style={previewNav}>Search</span></li>
                        <li><span style={previewNav}>Logout</span></li>
                    </ul>
                </div>

                <div className='preview-main'>
                    <div style={previewCTA} className='preview-CTA'>
                        <p>Super Generic Website</p>
                    </div>
                    <div className='preview-circle-wrapper'>
                        <div style={circle1} className='preview-circle' />
                        <div style={circle2} className='preview-circle' />
                        <div style={circle3} className='preview-circle' />
                    </div>
                    <div className='preview-example-text'>
                        <p>This preview is here to give you an idea of how your application might look using these colors.</p>
                        <p>This preview is here to give you an idea of how your application might look using these colors.</p>
                        <p>This preview is here to give you an idea of how your application might look using these colors.</p>
                    </div>
                </div>

                <div style={previewFooter} className='preview-navs'>
                    <ul className='preview-ul'>
                        <li><span style={previewLinks}>Donate</span></li>
                        <li><span style={previewLinks}>About</span></li>
                        <li><span style={previewLinks}>Contact</span></li>
                    </ul>
                </div>
            </div>

            {/* this are the hex codes as colors */}
            <div className='preview-hex'>
                <h4>HEX Codes</h4>
                <ul>
                    <li>
                        Primary
                        <span 
                            style={{backgroundColor: palette.primary, color: getContrastingColor(palette.primary)}}
                            className='preview-hex-color'>
                                {palette.primary}
                        </span>
                    </li>
                    <li>
                        Secondary
                        <span 
                            style={{backgroundColor: palette.secondary, color: getContrastingColor(palette.secondary)}}className='preview-hex-color'>
                                {palette.secondary}
                        </span>
                    </li>
                    <li>
                        Accent 1
                        <span 
                            style={{ backgroundColor: palette.accent1, color: getContrastingColor(palette.accent1)}} 
                            className='preview-hex-color'>
                                {palette.accent1}
                        </span>
                    </li>
                    <li>
                        Accent 2
                        <span 
                            style={{ backgroundColor: palette.accent2, color: getContrastingColor(palette.accent2)}}
                            className='preview-hex-color'>
                                {palette.accent2}
                        </span>
                    </li>
                    <li>
                        Accent 3
                        <span 
                            style={{ backgroundColor: palette.accent3, color: getContrastingColor(palette.accent3)}}
                            className='preview-hex-color'>
                                {palette.accent3}
                        </span>
                    </li>
                </ul>
            </div>

            {/* this is the code snippet */}
            <div className='code-snippet'>
                <h4>CSS Variables</h4>
                <pre className='code-background'>
                    <code>
    {/* this has to be way over here b/c that's how the element works */}
    {`
    :root {
        --primary: ${palette.primary}
        --secondary: ${palette.secondary}
        --accent1: ${palette.accent1}
        --accent2: ${palette.accent2}
        --accent3: ${palette.accent3}
    }
    `}
                    </code>
                </pre>
            </div>
        </>
    )
}

export default Preview;
