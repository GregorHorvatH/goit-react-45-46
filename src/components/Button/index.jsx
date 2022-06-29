import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.close ? 'palevioletred' : 'lightblue')};
  border: none;
  color: ${(props) => (props.isRed ? 'red' : 'white')};
  border-radius: 5px;
`;

export const NormalButton = () => <Button>x</Button>;

export const CloseButton = ({ item = {} }) => (
  <Button close isRed={item.count > 0}>
    x
  </Button>
);

export default Button;
