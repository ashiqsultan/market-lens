import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/hello');
      const json = await response.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <>
      <p>This is Market Lens Frontend</p>
      <p>{String(data)}</p>
    </>
  );
}

export default App;
