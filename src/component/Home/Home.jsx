import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {

    const [data, setData] = React.useState([])

    const getdata = () => {
        fetch(`http://localhost:3002/products`)
            .then((res) => res.json())
            .then((res) => setData(res))
    }

    const handelDelete = (id) =>{
        fetch(`http://localhost:3002/products/${id}`,{
            method:'DELETE'
        })
        getdata()
    }

    React.useEffect(()=>{
        getdata()
    },[])



    console.log(data)
    // "id": 1,
    // "brand": "Roadster",
    // "title": "cotton Checked Casual Shirt",
    // "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg",
    // "category": "men",
    // "price": 844
    return (
        <div>
            <table>
                <tbody>
                    {
                        data.map((el)=>(
                            <tr key={el.id}>
                                <td >
                                    {el.brand}
                                </td>
                                <td >
                                    {el.title}
                                </td>
                                <td >
                                    {el.price}
                                </td>
                                <td>
                                    <Link to={`/product/${el.id}`}>
                                    <button>View</button></Link>
                                </td>
                                <td>
                                    <Link to={`/edit/${el.id}`}>
                                    <button >Edit</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handelDelete(el.id)}>Delete</button>
                                </td>
                            </tr>
                        
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Home