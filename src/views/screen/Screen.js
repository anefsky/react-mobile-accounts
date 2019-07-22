import React from 'react';
import styles from './Screen.module.scss';

import Header from '../header/Header';
import Accounts from '../accounts/Accounts';
import Footer from '../footer/Footer';

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberShown: 3,
            sortKey: null,
            sortDirection: null
        };
    }

    render() {
        return(
            <div className={styles.container}>

                <Header
                    onAccountSort = { () => this.handleAccountSort() }
                    onCashSort = { () => this.handleCashSort() }
                    state = { this.state }
                >
                </Header>

                <Accounts>
                </Accounts>

                <Footer
                    onShowMoreClick = { () => this.handleShowMore() }
                    state = { this.state }
                >
                </Footer>

            </div>
        );
    }

    handleShowMore() {
        console.log('in Screen:handleShowMore');
        // this.state.numberShown = 6;
        this.setState( {
            numberShown: 6
        });
    }

    handleAccountSort() {
        console.log('in Screen:handleAccountSort');
        // this.state.sortKey = 'account';
        this.setState( {
            sortKey: 'account'
        });
    }

    handleCashSort() {
        console.log('in Screen:handleCashSort');
        // this.state.sortKey = 'cash';
        this.setState( {
            sortKey: 'cash'
        });
    }
}