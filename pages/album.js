import React from 'react';

import Head from 'next/head'
import LayoutGeneral from '../components/LayoutGeneral'
import styles from '../styles/Home.module.css'

import config from '../components/config.js';

const text = {
    'cting': {
        'en': <div>This site is under construction. Photo waterfall brrrrrrruuhhh</div>,
        'cn': <div>此网站正在施工中。整个无限滚动的照片墙嗷~</div>,
    },
}

function getText(textName) {
    return (
        <div>
            {text[textName][config['lang']]}
        </div>
    )
}

class Album extends React.Component {
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
            <LayoutGeneral pageTitle="Album" updateLang={this.updateLang}>
                {getText('cting')}
            </LayoutGeneral>
        )
    }
}

export default Album;