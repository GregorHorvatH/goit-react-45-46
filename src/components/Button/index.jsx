import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ type }) => {
    switch (type) {
      case 'danger':
      case 'close':
        return '#dc3545';

      case 'success':
        return '#28a745';

      case 'link':
        return '#ffffff';

      default:
        return '#f8f9fa';
    }
  }};

  color: ${({ type }) => {
    switch (type) {
      case 'link':
        return '#007bff';

      default:
        return '#000000';
    }
  }};

  border: none;
  border-radius: 5px;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ type }) => {
      switch (type) {
        case 'danger':
        case 'close':
          return '#c82333';

        case 'success':
          return '#218838';

        case 'link':
          return '#ffffff';

        default:
          return '#e2e6ea';
      }
    }};

    text-decoration: ${({ type }) => {
      switch (type) {
        case 'link':
          return 'underline';

        default:
          return 'none';
      }
    }};
  }
`;

export const NormalButton = ({ onClick }) => (
  <Button onClick={onClick}>x</Button>
);

export const CloseButton = ({ item = {}, onClick }) => (
  <Button close isRed={item.count > 0} onClick={onClick}>
    x
  </Button>
);

export default Button;
