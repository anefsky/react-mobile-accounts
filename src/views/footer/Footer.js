import React from 'react';
import styles from './Footer.module.scss';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.textStyle}>In footer</div>
        );
    }
}