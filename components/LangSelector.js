import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import config from './config.js';


function setLang(lang) {
    console.log("lang is set to", lang);
    return;
}



class LangSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lang: config['lang'] };
        this.setLangCN = this.setLangCN.bind(this);
        this.setLangEN = this.setLangEN.bind(this);

        //console.log(window.localStorage.getItem('lang'));
    }

    setLangCN() {
        console.log("lang is set to CN");
        config['lang'] = 'cn';
        this.setState({ lang: 'cn' });
        localStorage.setItem('lang', 'cn');

        this.props.updateLang();
    }

    setLangEN() {
        console.log("lang is set to EN");
        config['lang'] = 'en';
        this.setState({ lang: 'en' });
        localStorage.setItem('lang', 'en');

        this.props.updateLang();
    }

    componentDidMount() {
        if (window.localStorage.getItem('lang') == 'cn') {

            config['lang'] = 'cn';
            this.setState({ lang: 'cn' });
            this.props.updateLang();
        }
    }

    render() {
        return (
            <ButtonGroup>
                <Button onClick={this.setLangCN} variant="outline-dark" id="button_CN" disabled={this.state.lang == 'cn'}>中</Button>
                <Button onClick={this.setLangEN} variant="outline-dark" id="button_EN" disabled={this.state.lang == 'en'}>EN</Button>
            </ButtonGroup>
        );
    }
}

export default LangSelector;