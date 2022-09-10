import React from 'react'
import { useParams } from 'react-router'



const Product = () => {
    const { id } = useParams();

    const [data, setData] = React.useState([])

    const getdata = (id) => {
        fetch(`http://localhost:3002/products/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res))
    }

    React.useEffect(() => {
        getdata(id)
    }, [])

    console.log(data)

    // brand:"Roadster"
    // category:"men"
    // id:1
    // image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
    // price:844
    // title:"cotton Checked Casual Shirt"
    return (
        <div>
            <h1>Brand {data.brand}</h1>
            <h2>Brand {data.men}</h2>
            <img src={data.image} alt="" />
            <h2>{data.price}</h2>
            <h3>{data.title}</h3>
        </div>
    )
}

export default Product