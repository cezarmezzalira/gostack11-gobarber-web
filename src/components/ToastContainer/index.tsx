import React from 'react';
import { FiAlertTriangle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível efetuar login na aplicação.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="warning" hasDescription={false}>
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível efetuar login na aplicação.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
