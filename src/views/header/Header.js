import React from 'react';
import styles from './Header.module.scss';

export default class Header extends React.Component {
    render() {
        return(
            <div className = { styles.container }>

                <div
                    onClick = { this.props.onAccountSort }
                >
                    Sort by account
                </div>

                <div
                    onClick = { this.props.onCashSort }
                >
                    Sort by cash
                </div>

                <div>sort key: { this.props.state.sortKey }</div>
                <div>sort direction: { this.props.state.sortDirection }</div>

            </div>
        );
    }
}