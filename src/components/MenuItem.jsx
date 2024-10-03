const MenuItem = (props) => {
  const { icon: Icon, text, ...restProps } = props;

  return (
    <button className="btn border-none shadow-none justify-start gap-x-2 hover:bg-opacity-20">
      <Icon {...restProps} />
      {text}
    </button>
  );
};

export default MenuItem;
