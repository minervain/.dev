
export const removeFromBasket = (itemId) => {
    return {
      type: 'REMOVE_FROM_BASKET',
      payload: itemId,
    };
  };
  