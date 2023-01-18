import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CompLoader.scss';

const CompLoader = () => {
  return (
    // <div className="compLoader flex_center">
    //   <FontAwesomeIcon icon={faSpinner} spin />
    // </div>
    <div className="loader_cont">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default CompLoader