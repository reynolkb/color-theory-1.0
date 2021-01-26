import React from 'react';
import Palette from '../components/Palette';

const Home = () => {

    return(
        <>
            <div>
                Palette Scrolls
                <Palette />

            </div>

            <div>
                Sidebar
                <div>
                    Palette of the Day
                </div>
                <div>
                    Palette of the Week
                </div>
            </div>
        </>
    );
};

export default  Home;
