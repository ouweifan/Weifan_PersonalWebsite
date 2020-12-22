import React from 'react';

import PropTypes from 'prop-types';
import NavBar from './NavBar.js';
import BotBar from './BotBar.js';

import config from './config.js';


class LayoutHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lang: config['lang'], pageTitle: props.pageTitle };
        this.updateLang = this.updateLang.bind(this)
    }

    updateLang() {
        this.setState({ lang: config['lang'] });
        this.props.updateLang();
    }

    render() {
        return (
            <div>
                <div className='homeLayout'>
                    <div className='TopBarDiv'>
                        <NavBar updateLang={this.updateLang} />
                    </div>
                    <div className="ContentDivHome">
                        {this.props.children}
                    </div>
                </div>
                <div className='BotBarDiv'>
                    <BotBar theme='home' />
                </div>
            </div>
        );
    }
}

LayoutHome.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    updateLang: PropTypes.func.isRequired,
}

export default LayoutHome;