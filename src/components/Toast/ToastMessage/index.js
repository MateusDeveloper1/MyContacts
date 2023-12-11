import PropTypes from 'prop-types';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastContainer({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="X" /> }
      {type === 'success' && <img src={checkCircleIcon} alt="check" /> }
      <strong>{text}</strong>
    </Container>
  );
}

ToastContainer.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastContainer.defaultProps = {
  type: 'default',
};
