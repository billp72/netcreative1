const ItemWrapper = ({
  conditionA,
  conditionB,
  wrapperA,
  wrapperB,
  children,
}) => {
  if (conditionA) {
    return wrapperA(children);
  } else if (conditionB) {
    return wrapperB(children);
  } else {
    return children;
  }
};

export default ItemWrapper;
