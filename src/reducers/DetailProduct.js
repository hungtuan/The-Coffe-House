const initialState = {
  product: []
};

export default function DetailProduct(state = initialState, action) {
  switch (action.type) {
    case "ADD_DETAIL":
      console.log(action.data)
      return {
        product: [action.data]
      };

    case "CHANGE-QUANTITY":
      // action: { type: 'CHANGE-QUANTITY', data: item, changeQuantityType: type }
      const changeQuantityProduct = () => {
        if (action.changeQuantityType === 'reduce')
          return { ...action.data, quantity: action.data?.quantity === 1 ? 1 : action.data?.quantity - 1 }
        else return { ...action.data, quantity: action.data?.quantity + 1 }
      }
      return {
        product: [changeQuantityProduct()]
      }
    default:
      return state;
  }
}