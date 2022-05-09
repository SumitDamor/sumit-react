import React from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {fname, listNum} = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  return (
    <>

    <h1>1. Router Contact Component Ko render Krr Raha Hai</h1>
    <h1>2. Router Contact Component Ko <b>{fname}</b> Prr se URL Hook useParams() se lekar aaya</h1>
    <h1>2. Router Contact Component Ko <b>{fname}</b> Prr se URL Hook useParams() se lekar aaya, <b>{listNum}</b> pr target krr raha hai</h1>

    {location.pathname === `/contact/${fname}/premiumcustomer` ?  (
     <>
      <h1>Premium Customer</h1>
      <button onClick={() => {
        // alert('You are a premium customer')
        // history.goBack(); // just for going back
        history.push('/services') // for specific URL
      }}>Click Me</button>
     </>
    ) : null}
    </>
  
  )
}

export default Contact