import { createContext }from 'react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
export  let contextProduct=createContext(null)


export default function ProductProviderr({children}){
  let [product,setProduct]=useState([])
  let [productMen,setProductMen]=useState([])
  let [productwomen,setProductWomen]=useState([])
  let [productJewelery,setProductJewelery]=useState([])
 let  products=[];
   function addProduct(product){
  products.push(product)
 }
  async function getProduct(){
  let {data}= await axios.get('https://fakestoreapi.com/products')
  setProduct(data)
  }
  async function getProductClothing(category,callback){
    let {data}= await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    callback(data)
    }
  useEffect(()=>{
    getProduct()
    getProductClothing("men's clothing",setProductMen)
    getProductClothing("women's clothing",setProductWomen)
    getProductClothing("jewelery",setProductJewelery)
  },[])
  
    return <contextProduct.Provider value={{product,addProduct,products,productMen,productwomen,productJewelery}}>
  {children}
  </contextProduct.Provider>
}
