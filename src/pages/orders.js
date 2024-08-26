import {useEffect , useState} from 'react'


export default function OrdersPage() {

  const [orders, setOrders] = useState([])


  useEffect(()=> {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/getOrders');
        const data = await response.json()

        setOrders(data)
      }catch{
        console.error("Error fetching orders : " , error)
      }
    }
    fetchOrders()
  },[])
 

  const parsedData = orders.map(item => {

    const productsArray = item.products.split(', ').map(product => {
      const [productName , quantity] = product.split(" : ")
      return { productName , quantity}
    })

    return {
      option : item.option,
      products : productsArray
    }
})




  return(
    <div> 
      
        {/* {orders.map((order , i) => (
          <div key={i} style={{display : 'flex' ,flexDirection : "column" , border : 'solid red 1px'}}>
         <p>Option : {order.option}</p> 
         <p>Product : {order.products} </p>
          </div>
        ))}  */}
        
        {parsedData.map((item,i) => (
         <div key={i}>
           <p>{item.option}</p>
            <ul>
              {item.products.map((product , i) => (
                <li>{product.productName} : {product.quantity}</li>
              ))}
            </ul>
         </div>
        ))}

      
    </div>
  )

}
























// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/getOrders');
//     const orders = await res.json();
  
//     return {
//       props: { orders },
//     };
//   }
  
//   export default function Orders({ orders }) {
//     return (
//       <div>
//         <h1>Orders</h1>
//         <ul>
//           {orders.map((order,i) => (
//             <li key={i}>
//               {order.option} - {order.quantity}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }