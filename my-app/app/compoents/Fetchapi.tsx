import axios from 'axios'
import React from 'react'

export default function Fetchapi() {
    async function fetchAPI() {
        const fetchData = await axios.get('https://dummyjson.com/products')
        const newdata = fetchData.data
        console.log(newdata)
    }
  return (
    <div>
      <h1>Fetch Data</h1>
    </div>
  )
}
