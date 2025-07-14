import {useEffect, useState} from 'react';


function Home() {
  const fetchHello = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setHello(data.message);
    };
    const [hello, setHello] = useState('');
  useEffect(() => {
    fetchHello();
  }, [])
  return (
      <h1>Message from BACKEND : {hello}</h1>
  )
}

export default Home