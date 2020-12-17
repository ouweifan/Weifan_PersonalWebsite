import PropTypes from 'prop-types';
import NavBar from './NavBar.js';

const LayoutGeneral = ({pageTitle, children}) => (
    <div>
        <NavBar/>
        <div className="div_content">
            {children}
        </div>
    </div>
)

LayoutGeneral.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default LayoutGeneral;