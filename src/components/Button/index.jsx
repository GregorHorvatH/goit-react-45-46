import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.close ? '#cba7db' : '#b7fdc177d')};
  border: none;
  color: ${(props) => (props.close ? 'white' : 'black')};
  border-radius: 5px;
  padding: 0 10px;
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
