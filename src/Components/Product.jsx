import React, {useEffect, useState} from 'react';
import  Axios  from 'axios';
function Product({id}) {
  const [products,SetProducts]=useState([]);
  const [page,setPage]=useState(1);

  const fetcher=  ()=>{
    Axios.get(`https://reqres.in/api/products?per_page=5&page=${page}&${id?'id='+id:'' }`).then((res)=>{
      SetProducts(res.data.data);
     })
  .catch( (error)=> {
     if(error.response.status>400&&error.response.status<499){
      alert("you have bad connection or the searched item doesnt exist")
     }else if(error.response.status>500&&error.response.status<600){
      alert("Sorry due to an error in our servers we cannot show you our product")
     }
  });
  }
  useEffect(()=>{
    fetcher();
  },[page,id])
  
    


        return (
          
          <>
          
         {
          
        products.length>1?
            products.map((item)=>{
          return(
            <div key={item.id} style={{backgroundColor:`${item.color}`}} className='flex direction_column product justify_center ' >
            <span className='flex justify_between'>
              <p> {item.id} </p>
              <p> {item.name} </p>
            </span>
            <span className='flex justify_center'>
              <p> {item.year} </p>
            </span>    
          </div>
          )
            

            })
            :  (
              <div key={products.id} style={{backgroundColor:`${products.color}`}} className='flex direction_column product justify_center ' >
            <span className='flex justify_between'>
              <p> {products.id} </p>
              <p> {products.name} </p>
            </span>
            <span className='flex justify_center'>
              <p> {products.year} </p>
            </span>    
          </div>
            )
          } 
           {
            id===null||id===""?
            page===3? (
              <span className='ButtonContainer'>
              <button onClick={()=>setPage(page-1)}>previous Page</button>
              </span>
            ):page===1?  (
              <span className='ButtonContainer'>
              <button onClick={()=>setPage(page+1)}>Next Page</button>
              </span>
            ) :(
              <span className='ButtonContainer justify_between'>
              <button onClick={()=>setPage(page-1)}>Previous Page</button>
              <button onClick={()=>setPage(page+1)}>Next page</button>
              </span>

            )
            
             :
             (
              <span className='ButtonContainer justify_between'>
              </span>
             )
             

              

           }
          </>
         
        )

      
         

        
      
      


    
  
  
}

export default Product