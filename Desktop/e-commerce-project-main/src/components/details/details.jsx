// ProductDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // API'den ürün bilgilerini çekmek için bir fonksiyon tanımlayalım
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/account/products/${id}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmJiN2RkNzg4NmE5Zjg2NGI1NTE5NjM3NThmM2JjMSIsInN1YiI6IjY0YTNiZTYwZTlkYTY5MDBlNDBjMGEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzqMwIdfly2bNUmAySxz23lk8GcBss0_eVyLj1zktr4', // Eğer gerekliyse yetkilendirme bilgilerini buraya ekleyin
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductData(); // Ürün bilgilerini çeken fonksiyonu çağırıyoruz
  }, [id]);

  if (!productData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>{productData.title}</h1>
      <img src={productData.image_url} alt={productData.title} />
      <p>{productData.description}</p>
      <p>Price: ${productData.price}</p>
      {/* Diğer ürün bilgilerini gösterebilirsiniz */}
    </div>
  );
};

export default ProductDetail;
