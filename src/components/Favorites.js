import Title from "ui/Title"
import Products from "api/product.json"
import { useEffect, useState } from "react"
import { ProductItem } from "ui/ProductItem"

export const Favorites = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length && products.map((product) => <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}