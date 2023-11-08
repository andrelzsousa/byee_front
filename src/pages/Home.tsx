import { useEffect, useState } from "react"
import axios from 'axios';
import  imgDefault  from "../assets/default.jpg";
import { Product } from "../types/Product";


function Home() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchData() {
            try{
                const res = await axios.get("http://localhost:8000/products")
                setProducts(res.data)
            } catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [setProducts])

    console.log(products)

    return (
        <div className="flex gap-2 flex-wrap p-10">
            {products.map((product) => {
                return(
                    <div className="border border-black rounded-xl flex flex-col gap-1 items-center p-2 w-44 h-48" key={product.id}>
                        <img src={imgDefault} className="w-20 h-20 rounded-full"/>
                        <h3 className="font-bold">{product.nome}</h3>
                        <p>R$ {product.preco}</p>
                        <p className="bg-black text-white rounded-full px-2 py-1 text-xs">{product.tipo}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
