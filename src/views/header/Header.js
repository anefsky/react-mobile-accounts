import React from 'react';
import styles from './Header.module.scss';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.textStyle}>In header</div>
        );
    }
}