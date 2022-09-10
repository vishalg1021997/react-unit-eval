import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = React.useState([])

    const [brand, setBrand] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [image, setImage] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [price, setPrice] = React.useState('')

    const getdata = (id) => {
        fetch(`http://localhost:3002/products/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setBrand(res.brand)
                setTitle(res.title)
                setImage(res.image)
                setCategory(res.category)
                setPrice(res.price)
            })


    }

    React.useEffect(() => {
        getdata(id)
    }, [])


    const handelChange = (id) => {
        var temp = {
            brand,
            title,
            image,
            category,
            price
        }

        fetch(`http://localhost:3002/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(temp),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            setTimeout(() =>{
                navigate(`/product/${id}`);
            },1000)
    }

    console.log(data)

    return (
        <div> <br/> <br/>
            <input type="text" value={brand} onChange={(event) => { setBrand(event.target.value) }} /> <br/> <br/>
            <input type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} /> <br/> <br/>
            <input type="text" value={image} onChange={(event) => { setImage(event.target.value) }} /> <br/> <br/>
            <input type="text" value={category} onChange={(event) => { setCategory(event.target.value) }} /> <br/> <br/>
            <input type="text" value={price} onChange={(event) => { setPrice(event.target.value) }} /> <br/> <br/>

            <button onClick={() => handelChange(id)}>Save Changes</button>
        </div>
    )
}

export default Edit