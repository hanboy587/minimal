import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('');
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setHello(res.data))
      .catch(err => console.log(err))
  }, [])

  const userList = async() => {
    const res = await axios.get('/api/getusernames');
    console.log('userList 반환 : ', res.data);
    setUsernames(res.data);
  }

  useEffect(() => {
    userList();
  }, [])

  return (
    <div>
      백엔드에서 가져온 데이터 입니다 : {hello}
      (userList())
    </div>
  )
}

export default App;