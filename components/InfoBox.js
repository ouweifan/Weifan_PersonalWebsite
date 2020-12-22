import React from 'react';

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InfoBox"></div>
        );
    }
}

InfoBox.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    updateLang: PropTypes.func.isRequired,
}

export default InfoBox;