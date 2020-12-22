import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedinIn,
    faInstagram,
    faWeibo,
} from '@fortawesome/free-brands-svg-icons';


const socialMediaLink = {
    'github': 'https://github.com/ouweifan',
    'linkedin': 'https://www.linkedin.com/in/weifanou',
    'instagram': 'https://www.instagram.com/vanadium.o/',
    'weibo': 'https://weibo.com/3855507109/'
}



class SocialMediaEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: this.props.theme, link: this.props.link }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //alert('hi'+this.state.link);
        window.open(this.props.link);
    }

    render() {
        return (
            <button onClick={this.handleClick} className='SocMedButton'>
                <div className={'SocMedBox' + '_' + this.state.theme}>
                    <FontAwesomeIcon icon={this.props.icon} size="2x" />
                </div>
            </button>
        );
    }
}

/*
 Expected props: 
 theme: general, home
 */
class BotBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: this.props.theme }
    }

    render() {
        return (
            <div>
                <div className={'SocMedBar' + '_' + this.state.theme}>
                    <SocialMediaEntry icon={faGithub} size="2x"
                        theme={this.state.theme} link={socialMediaLink['github']} />
                    <SocialMediaEntry icon={faLinkedinIn} size="2x"
                        theme={this.state.theme} link={socialMediaLink['linkedin']} />
                    <SocialMediaEntry icon={faInstagram} size="2x"
                        theme={this.state.theme} link={socialMediaLink['instagram']} />
                    <SocialMediaEntry icon={faWeibo} size="2x"
                        theme={this.state.theme} link={socialMediaLink['weibo']} />
                </div>
                <div className={'BotBarText' + '_' + this.state.theme} >
                    © 2020 - 欧炜钒 Weifan Ou
            </div>
            </div >
        )
    }
}
export default BotBar;