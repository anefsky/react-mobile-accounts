import React from 'react';
import styles from './Footer.module.scss';

export default class Footer extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className={styles.container}>
                <div
                    onClick = { this.props.onShowMoreClick }
                >
                    Show more: { this.props.state.numberShown }
                </div>
            </div>
        );
    }

    // handleClick() {
    //     console.log('show more clicked');
    // }
}