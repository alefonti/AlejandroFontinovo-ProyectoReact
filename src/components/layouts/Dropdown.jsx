import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
const Dropdown = ({lista}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const listaDrop = lista.map((categoria, indice) => 
      <Link key={indice} className='dropdown-item' to={`/categoria/${indice + 1}`}>{categoria}</Link>
    )
    setList(listaDrop)
    
  }, []);
   

    return (
        <>
          <li className="nav-item dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</button>
            <div className="dropdown-menu">
              {list}
            </div>
          </li>  
        </>
    );
}

export default Dropdown;