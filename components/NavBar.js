import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link'

import LangSelector from './LangSelector.js';

import config from './config.js';

const text = {
    'name': {
        'en': <div>Weifan Ou</div>,
        'cn': <div>欧炜钒</div>,
    },
    'about': {
        'en': 'About',
        'cn': '关于',
    },
    'hobby': {
        'en': 'Hobby',
        'cn': '爱好',
    },
    'album': {
        'en': 'Album',
        'cn': '相册',
    },
    'projects': {
        'en': 'Projects',
        'cn': '项目'
    },
}

function getText(textName) {
    return (
        <div>
            {text[textName][config['lang']]}
        </div>
    )
}


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lang: config['lang'] };
        this.updateLang = this.updateLang.bind(this)
    }

    updateLang() {
        this.setState({ lang: config['lang'] });
        this.props.updateLang();
    }

    render() {
        return (
            <div className='NavBarDiv'>
                <Navbar bg="light" variant="light" expand="lg">
                    <Link href="/" passHref>
                        <Navbar.Brand>{getText('name')}</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href="/about" passHref>
                                <Nav.Link>
                                    {getText('about')}
                                </Nav.Link>
                            </Link>
                            <Link href="/projects" passHref>
                                <Nav.Link>
                                    {getText('projects')}
                                </Nav.Link>
                            </Link>
                            <Link href="/hobby" passHref>
                                <Nav.Link>
                                    {getText('hobby')}
                                </Nav.Link>
                            </Link>
                            <Link href="/album" passHref>
                                <Nav.Link>
                                    {getText('album')}
                                </Nav.Link>
                            </Link>
                        </Nav>
                        <LangSelector updateLang={this.updateLang} />
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}

export default NavBar;