import React, { useEffect, useState } from 'react'
import { apiClient } from '../../API/axios'
import './Home.css'
import Card from '../../components/Card';
import 'aos/dist/aos.css'
import Aos from 'aos';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await apiClient.get('products')
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error?.message || 'something went wrong ')
    }
  }

  useEffect(() => {
    Aos.init({
      easing: 'ease'
    })
    fetchProducts();
  }, [])

  return (
    <section className='home'>

      <div className='container grid-container'>
        {error ? <h1>{error}</h1> : loading ? (
          <h2>Loading...</h2>
        ) : (
          products.map((product) => <Card key={product.id} product={product}  />)
        )}
      </div>
    </section>
  )
}

export default Home
