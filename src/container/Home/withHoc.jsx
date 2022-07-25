const withHoc = (Component) => (props) => {
  return <Component value={5} {...props} />;
};

export default withHoc;
