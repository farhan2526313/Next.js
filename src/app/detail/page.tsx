/* eslint-disable react/jsx-key */
import Link from "next/link";

async function  Detail   ()  {

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const res = await data.json()
    console.log(res)


    return(

        <div>
             <p>Product items</p>
            
            <p>{
                res.map(( item: any, i : number) =>{

                    return(
                        <li>
                            <Link href= {`/detail/${item.id}`}>{item.title} </Link>
                            
                        </li>
                    )
                })
                }</p>
        </div>
    )
}

export default Detail;