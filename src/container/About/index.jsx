import { useSelector } from 'react-redux';

const About = () => {
  const { email, name } = useSelector((state) => state.user);

  return (
    <div className='container'>
      <h3>About</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
        nostrum! Vero doloremque nesciunt voluptatibus nisi, ullam, velit cum
        vitae natus temporibus et dicta soluta quibusdam, tenetur ex doloribus
        provident amet!
      </p>
      <p>email: {email}</p>
      <p>name: {name}</p>
    </div>
  );
};

export default About;
