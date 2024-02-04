import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { fetchData } from './actions/Index';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.fetchJsonData.data);
  const isLoading = useSelector(state => state.fetchJsonData.isLoading);
  const error = useSelector(state => state.fetchJsonData.error);
  useEffect(()=>{
    dispatch(fetchData());
  },[dispatch]);
  console.log(error);

  



  return (
    <div>
    {isLoading && <h1>Loading...</h1>}
    <h1>{data.map((item,index)=>{
      return (
        <p key={index}>{item.title}</p>
      )
    })}</h1>
    {error && <h1>{error}</h1>}
    </div>
  )
}

export default App
