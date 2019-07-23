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
            sortDirection: null,
            data: []
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

                <Accounts
                    accounts = { this.state.data }
                >
                </Accounts>

                <Footer
                    onShowMoreClick = { () => this.handleShowMore() }
                    state = { this.state }
                >
                </Footer>

            </div>
        );
    }

    getNewSortDirection(newSortKey) {
        let newDirection;
        if (this.state.sortKey === null || this.state.sortKey !== newSortKey) {
            newDirection = 'asc';
        } else {
            newDirection = (this.state.sortDirection === 'asc' ? 'desc' : 'asc');
        }
        return newDirection;
    }

    handleShowMore() {
        this.setState( {
            numberShown: 6
        });
        this.doFetch();
    }

    handleAccountSort() { this.doSort('account'); }
 
    handleCashSort() { this.doSort('cash') };

    doSort(sortKey) {
        const newSortDirection = this.getNewSortDirection(sortKey);
        this.setState( {
            sortKey: sortKey,
            sortDirection: newSortDirection
        });
    }

    doFetch() {
        fetch('accounts_data.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data.slice(0, this.state.numberShown ) }))
 }

    componentDidMount() {
        this.doFetch();
    }
}