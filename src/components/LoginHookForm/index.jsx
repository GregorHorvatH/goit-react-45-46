import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: 'tro-lo-lo',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log('errors:', errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>login</span>
          <input type='text' {...register('login')} />
        </label>

        <label>
          <span>password</span>
          <input
            type='password'
            {...register('password', { required: true })}
          />
        </label>
        <p>{errors.password ? 'password is required' : ''}</p>

        <br />
        <input type='checkbox' {...register('guarantee')} />

        <button type='submit'>login</button>
      </form>
    </>
  );
};

export default LoginForm;
