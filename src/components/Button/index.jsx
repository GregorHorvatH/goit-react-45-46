import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.close ? '#cba7db' : 'lightblue')};
  border: none;
  color: ${(props) => (props.close ? 'white' : 'black')};
  border-radius: 5px;
  padding: 0 10px;
`;

export const NormalButton = () => <Button>x</Button>;

export const CloseButton = ({ item = {} }) => (
  <Button close isRed={item.count > 0}>
    x
  </Button>
);

export default Button;
