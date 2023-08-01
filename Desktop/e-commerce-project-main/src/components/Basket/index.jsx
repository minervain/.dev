import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket } from '../../redux/store/actions/basketActions'; // actions doğru şekilde import edildi

function Basket() {
  const basketItems = useSelector((state) => state.basket.basketItems); 
  const dispatch = useDispatch();

  const handleRemoveFromBasket = (itemId) => {
    dispatch(removeFromBasket(itemId)); // removeFromBasket fonksiyonu doğru şekilde kullanıldı
  };

  return (
    <div>
      <h1>Shopping Basket</h1>
      {basketItems.map((item,index) => (
        <div key={index}> {/* item.id kullanarak benzersiz key oluşturuldu */}
          <h3>{item.original_title}</h3>
          <p>{item.overview}</p>
          <p>Price: $450</p>
          <Button colorScheme='red' onClick={() => handleRemoveFromBasket(item.id)}>SİL</Button> 
        </div>
      ))}
    </div>
  );
}

export default Basket;
