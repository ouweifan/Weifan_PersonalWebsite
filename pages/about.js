import React from 'react';

import Head from 'next/head'
import LayoutGeneral from '../components/LayoutGeneral'
import styles from '../styles/Home.module.css'

import config from '../components/config.js';

const text = {
    'cting': {
        'en': <div>This site is under construction. This dude is lazy. Don't even bother.</div>,
        'cn': <div>此网站正在施工中。这个人很懒，屁都不会。</div>,
    },
}

function getText(textName) {
    return (
        <div>
            {text[textName][config['lang']]}
        </div>
    )
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lang: config['lang'] };
        this.updateLang = this.updateLang.bind(this)
    }

    updateLang() {
        this.setState({ lang: config['lang'] });
    }


    render() {
        return (
            <LayoutGeneral pageTitle="About" updateLang={this.updateLang}>
                {getText('cting')}
            </LayoutGeneral>
        )
    }
}

export default About;