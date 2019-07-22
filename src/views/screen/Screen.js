import React from 'react';
import styles from './Screen.module.scss';

import Header from '../header/Header';
import Accounts from '../accounts/Accounts';
import Footer from '../footer/Footer';

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className={styles.textStyle}>In screen</div>

                <Header>
                </Header>

                <Accounts>
                </Accounts>

                <Footer>
                </Footer>
                
            </div>
        );
    }
}