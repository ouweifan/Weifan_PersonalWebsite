import React from 'react';

import Head from 'next/head'
import LayoutGeneral from '../components/LayoutGeneral'
import styles from '../styles/Home.module.css'

import config from '../components/config.js';

const text = {
    'cting': {
        'en': <div>This site is under construction. Project Fisher Pro.</div>,
        'cn': <div>此网站正在施工中。项目摸鱼专业户。</div>,
    },
}

function getText(textName) {
    return (
        <div>
            {text[textName][config['lang']]}
        </div>
    )
}

class Projects extends React.Component {
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
            <LayoutGeneral pageTitle="Projects" updateLang={this.updateLang}>
                {getText('cting')}
            </LayoutGeneral>
        )
    }
}

export default Projects;