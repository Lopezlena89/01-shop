import {  Title, ProductGrid } from '@/components';
import { initialData } from "@/seed/seed";
import { Category } from '../../../../interface/product.interface';
import { notFound } from "next/navigation";

const seedProducts = initialData.products;  

interface Props{
  params:{
    id:Category;
  }
}

export default function Category({params}:Props) {
  
  const {id} = params;
  const products = seedProducts.filter(product => product.gender === id)

  const labels:Record<Category,string> = {
    'men':'para Hombres',
    'women':'para Mujeres',
    'kid':'para Niños',
    'unisex':'para todos'
  }

  // if(id === 'kids'){
  //   notFound();
  // } 

  return (
    <>
      <Title
        title={`Articulo de ${labels[id]}`}
        subtitle="Todos los productos"
        className='mb-2'
      />
      <ProductGrid
        products={products}
      
      />
    </>
  );
}