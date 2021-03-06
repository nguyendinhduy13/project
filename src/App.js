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
        <h3 className='w-2/5 h-20 text-slate-50 text-center '>(Intro) Ch??ng m??nh tin r???ng,
R???i sau c??ng c???a cu???c ?????i, ch??ng ta c??ng ch??? mong c?? th??? g??i g??m m???y ch???c n??m kh??n l???n l???i th??nh m???t c??u chuy???n ????ng ????? nghe. V?? trong m???t kho???nh kh???c ?????nh m???nh n??o ????, c??u chuy???n ???y ch??nh l?? c???m h???ng cho ng?????i kh??c vi???t n??n nh???ng di???u k???.
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