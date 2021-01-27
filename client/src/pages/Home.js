import React from 'react';

import { fakePalettes } from '../const/colors'

import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    return(
        <div className='global-wrapper'>
            <div className='home-palette-wrapper'>
                {
                    fakePalettes.map((palette, i) => (
                        <Palette key={i} palette={palette}/>
                    ))
                }
            </div>

            <div className='sidebar-wrapper'>
                <Sidebar />
            </div>
        </div>
    );
};

export default  Home;
