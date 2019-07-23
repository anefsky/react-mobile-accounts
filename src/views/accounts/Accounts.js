import React from 'react';
// import styles from './Accounts.module.scss';

export default class Header extends React.Component {

    render() {
        return(
            <ul>
                { this.props.accounts.map( (account) => (
                     <li key={account.id}>{account.id}</li>
                    ))
                }

            </ul>
        );
    }
}