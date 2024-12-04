const MenuItem = ({items})=>{
    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="flex justify-between">

                    <div className="p-2 m-2 border-black-400 border-b-2 flex flex-col w-10/12">
                        <span className="text-xl font-thin">{item.card.info.name}</span>
                        <span> ₹ - {item.card.info.price/100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className=" w-2/12">
                        <button className=" border-2 mt-6 mx-5 my-7 px-6 py-3 rounded-xl text-green-800 font-semibold hover:bg-gray-300">ADD</button>
                    </div>
                   
                </div>
                
            ))}
        </div>
    )
}

export default MenuItem;