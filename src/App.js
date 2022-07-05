import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import ListTicket from './components/ListTicket';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function App() {
  const options = ['Monday', 'Tuesday', 'Thursday', 
  'Friday', 'Saturday', 'Sunday']
  const [tickets,settickets]=useState([
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
  ]);

  return (
    <div className='grid grid-rows-4 justify-items-center'>
      <header className='bg-slate-900 h-full'>
      <div>
        <h3 className='text-center font-medium text-3xl text-slate-50 font-serif'>Title</h3> 
        <br/>
      </div>
      <div className='grid justify-items-center'>
        <hr className='w-80'/> <br/>
      </div>
      <div className='grid justify-items-center'>
        <h3 className='w-2/5 h-20 text-slate-50 text-center '>(Intro) Chúng mình tin rằng,
Rồi sau cùng của cuộc đời, chúng ta cũng chỉ mong có thể gói gém mấy chục năm khôn lớn lại thành một câu chuyện đáng để nghe. Và trong một khoảnh khắc định mệnh nào đó, câu chuyện ấy chính là cảm hứng cho người khác viết nên những diệu kỳ.
       </h3>
       <br/>
      </div>
      <div className='grid justify-items-end pr-10 pt-10'>
      <Autocomplete
        options={options}
        className='w-1/5 h-10 bg-white'
        renderInput={(params) =>
          <TextField {...params} variant="outlined" />}
      />
      <br/>
      </div>
      <div className='grid grid-cols-4'>
        <ListTicket tickets={tickets}/>
      </div>
      <div>
        
      </div>
      </header>
    </div>
  )
}