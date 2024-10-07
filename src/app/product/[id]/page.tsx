import ProductDetails from '@/components/ui/product/productDetails/ProdctDetails'
import { products } from '@/lib/variable'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params
  const product = products.find((product) => product.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
}