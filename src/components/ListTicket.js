import React,{useEffect,useState} from "react";
import ReactPaginate from "react-paginate";
const ListTicket=(props)=>{
    const {tickets}=props;
    const itemsPerPage=12;
const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(tickets.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tickets.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,tickets]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tickets.length;
    setItemOffset(newOffset);
}
    return(
        <>
        {currentItems.map((ticket,index)=>(
            <div> 
                <div>
                <img src={ticket.Poster} className="w-60 h-48 rounded-xl"></img>
                <br/>
                </div>
                <div>
                <h2 className="truncate w-60 text-slate-50 ">{ticket.title}</h2>
                </div>
            </div>
           
        ))}
         <br/>
        <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
       />
        </>
    )
}
export default ListTicket;