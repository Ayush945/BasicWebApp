import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get('/api/get-items')
      .then((response) => {
        setDatas(response.data)
      })

  }).catch((error) => {
    console.log(error)
  })
  return (
    <>
      <h1>Data are:</h1>
      {
        datas.map((data) => (
          <div key={data.item_id}>{data.item_id}
            <h3>{data.item_name}</h3>
            <h3>{data.item_price}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App