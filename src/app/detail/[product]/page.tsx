async function  Product( {params}:{params: {product : string }}) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    const res = await data.json();
    console.log(res);
    return(
        <div>
            <h2>Product Detail</h2>
            <p>{res.id }</p>
            <p>{res.title}</p>
            <p>{res.body}</p> 
        </div>
    )
}
export default Product;