import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'


interface PageHeadeProps{
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeadeProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar Home"/>
                    </Link>
                    <img src={logoImg} alt="Prof"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.children}
                </div>
            </header>
    );
}

export default PageHeader