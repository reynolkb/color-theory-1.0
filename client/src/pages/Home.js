import React from 'react';

import { fakePalettes } from '../const/colors'

import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    return(
        <>
            <div>
                {
                    fakePalettes.map((palette, i) => (
                        <Palette key={i} palette={palette}/>
                    ))
                }
            </div>

            <div>
                <Sidebar />
            </div>
        </>
    );
};

export default  Home;
