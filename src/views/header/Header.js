import React from 'react';
import styles from './Header.module.scss';

export default class Header extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

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
                    Sort by dollars
                </div>

                <div>sort key: { this.props.state.sortKey }</div>

            </div>
        );
    }
}