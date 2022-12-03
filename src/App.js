import { useEffect, useState } from 'react';
import axios from "axios";
import Header from './component/Header.js';
import Footer from './component/Footer.js'
function App() {
  const [data, setdata] = useState("");
  const [name, setname] = useState("");
  const [moves, setmoves] = useState();
  const getdata = async () => {
    const datas = await axios.get(`https://pokeapi.co/api/v2/type/${data}`);
    setname(datas.data.name);
    setmoves(datas.data.moves.length);
  }
  useEffect(() => {
    getdata();
  })
  return (
    <div>
      <Header name="Pokeman Api" />
      <div className="select">
        <h1>Your Selected Data is <span>{data}</span></h1>
        <h1>I Select <span>{name}</span></h1>
        <h1>I have <span>{moves}</span> moves</h1>
        <select value={data} onChange={(e) => { setdata(e.currentTarget.value) }}>
          <option value="1">1</option>
          <option value="9">9</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <Footer name="Arpit Pokemon Api" />
    </div>
  )
}

export default App;
