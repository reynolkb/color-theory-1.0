import React from 'react';

const Preview = ({ palette }) => {

    // console.log(palette);

    // I M CUTE

    
    const previewHeader = {
        backgroundColor: palette.primary,
    }

    const previewNav = {
        backgroundColor: palette.secondary,
    }

    const previewFooter = {
        backgroundColor: palette.accent1
    }

    const previewLinks = {
        backgroundColor: palette.secondary,
    }

    const previewCTA ={
        background: `linear-gradient(45deg, ${palette.accent3}, ${palette.primary})`,
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
        <div className='preview-wrapper'>
            <div style={previewHeader} className='preview-navs'>
                <h6>LOGO</h6>
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
    )
}

export default Preview;
