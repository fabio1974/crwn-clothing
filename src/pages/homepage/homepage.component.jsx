import React from 'react';
import './homepage.styles.scss'
import DirectoryComponent from "../../components/directory-component/directory-component";

function HomepageComponent(props) {
    return (
        <div className='homepage'>

            <DirectoryComponent/>

        </div>

    );
}

export default HomepageComponent;
