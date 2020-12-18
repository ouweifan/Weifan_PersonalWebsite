import React from 'react';

import Head from 'next/head'
import LayoutGeneral from '../components/LayoutGeneral'
import styles from '../styles/Home.module.css'

import { isMobileOnly } from 'react-device-detect';

import config from '../components/config.js';

const text = {
    'cting': {
        'en': <div>This site is under construction.</div>,
        'cn': <div>此网站正在施工中</div>,
    },
    'hello1': {
        'en': <div>Hello,&nbsp;</div>,
        'cn': <div>你好，</div>,
    },
    'hello2': {
        'en': <div>I am Weifan.</div>,
        'cn': <div>我是欧炜钒。</div>,
    },
    'welcome': {
        'en': <div>It's great to have you here!</div>,
        'cn': <div>欢迎来到我的角落！</div>,
    },
}

function getText(textName) {
    return (
        <div>
            {text[textName][config['lang']]}
        </div>
    )
}

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { platform: 'DT' };
    }

    componentDidMount() {
        if (isMobileOnly) {
            this.setState({ platform: 'MB' });
        }
    }

    render() {
        return (
            <div className='MainContent'>
                <div className={'MainWelcomeBox-' + this.state.platform}>
                    <div className={'MainWelcomeText-' + this.state.platform}>
                        <h1 className={'MainWelcomeText-' + this.state.platform}>{getText('hello1')}</h1>
                        <h1 className={'MainWelcomeText-' + this.state.platform}>{getText('hello2')}</h1>
                    </div>
                    <h1 className={'MainWelcomeText-' + this.state.platform}>{getText('welcome')}</h1>
                    <h2 className={'MainWelcomeText-' + this.state.platform}>Check out more about me here: About Hobby Album</h2>
                </div>
            </div>
        );
    }
}

class Home extends React.Component {
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
            <LayoutGeneral pageTitle="Home" updateLang={this.updateLang}>
                <HomeContent />
            </LayoutGeneral>
        )
    }
}

export default Home;