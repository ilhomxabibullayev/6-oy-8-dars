import React, { useState } from 'react'
import { apiClient } from '../../API/axios'
import './Admin.css'

const Admin = () => {

    const [productInfo, setProductInfo] = useState({
        description: '',
        image: '',
        inStock: '',
        name: '',
        price: '',
        rating: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefoult()
        console.log(productInfo);
        try {
            const res = await apiClient.post('/products', 'productInfo')
            console.log(res);
            setProductInfo({
                description: '',
                image: '',
                inStock: '',
                name: '',
                price: '',
                rating: '',
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='admin'>
            <div className='container admin__container'>
                <h2>Admin</h2>

                <p>{productInfo.description}</p>
                <form action="" className='admin__form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='description'
                        value={productInfo.description}
                        onChange={(e) => {
                            setProductInfo((prev) => ({ ...prev, description: e.target.value }))
                        }}
                    />
                    <br />
                    <input type="text" placeholder='image' value={productInfo.image} onChange={(e) => {
                        setProductInfo((prev) => ({ ...prev, image: e.target.value }))
                    }} />
                    <br />
                    <input type="text" placeholder='inStock' value={productInfo.inStock} onChange={(e) => {
                        setProductInfo((prev) => ({ ...prev, inStock: e.target.value }))
                    }} />
                    <br />
                    <input type="text" placeholder='name' value={productInfo.name} onChange={(e) => {
                        setProductInfo((prev) => ({ ...prev, name: e.target.value }))
                    }} />
                    <br />
                    <input type="text" placeholder='price' value={productInfo.price} onChange={(e) => {
                        setProductInfo((prev) => ({ ...prev, price: e.target.value }))
                    }} />
                    <br />
                    <input type="text" placeholder='rating' value={productInfo.rating} onChange={(e) => {
                        setProductInfo((prev) => ({ ...prev, rating: e.target.value }))
                    }} />

                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
