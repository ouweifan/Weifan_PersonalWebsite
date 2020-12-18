import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedinIn,
    faInstagram,
    faWeibo,
} from '@fortawesome/free-brands-svg-icons';

class SocialMediaEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='SocMedBox'>
                <FontAwesomeIcon icon={this.props.icon} size="2x" />
            </div>
        );
    }
}

class BotBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='BotBarDiv'>
                <div className='SocMedBar'>
                    <SocialMediaEntry icon={faGithub} size="2x" />
                    <SocialMediaEntry icon={faLinkedinIn} size="2x" />
                    <SocialMediaEntry icon={faInstagram} size="2x" />
                    <SocialMediaEntry icon={faWeibo} size="2x" />
                </div>
                <div className='BotBarText'>© 2020 - 欧炜钒 Weifan Ou</div>
            </div>
        )
    }
}
export default BotBar;