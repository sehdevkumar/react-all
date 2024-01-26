import { useEffect, useState } from "react";
import { useAppSelector } from "../store/app-store";
import { Product } from "../models/product-model";

const ProductView = () => {
  const selectProduct = useAppSelector((state) => state.productReducer);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(selectProduct.product);
  }, [selectProduct.product]);

  return (
    <>
      <div className="container mx-auto my-8">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-auto object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-blue-500 font-semibold mb-2">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-green-500 mb-2">Category: {product.category.name}</p>
              {/* Add additional product information as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
    </>
  );
};

export default ProductView;
