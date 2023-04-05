import React from 'react'
export default function Day6() {
    var menu=[{id:1,name:"BUGATI",price:"4.cr",image:<div id="fru1"><img src="https://images4.alphacoders.com/705/thumbbig-705509.webp" alt="car "/></div>},
               {id:2,name:"SUZUKI",price:"2.5cr",image:<div id="fru2"><img src="https://images5.alphacoders.com/320/thumbbig-320171.webp" alt=" "/></div>},
               {id:3,name:"ASTRAN-MARTIN",price:"40",image:<div id="fru3"><img src="https://images8.alphacoders.com/898/thumbbig-898096.webp" alt=" "/></div>}]
    var dispmenu=menu.map((fname)=>{return<ol key={fname.id}>{fname.id} . CARS: {fname.name} <br/> PRICE: {fname.price} <br/> IMAGE: <br/> {fname.image}<br/><br/></ol>})
  return (
    <div className='Day6'>
    <h1 id="HEAD"> DAY 6 LIST OF THE CARS</h1><br/>
        {dispmenu}
    </div>
  )
}