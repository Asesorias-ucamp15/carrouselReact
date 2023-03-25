import React, {useState} from 'react'
import './styles.css'
import engrane1 from './assets/images/engrane1.png'
import engrane2 from './assets/images/engrane2.png'
import engrane3 from './assets/images/engrane3.png'
import engrane4 from './assets/images/engrane4.png'
import engrane5 from './assets/images/engrane5.png'

const Carrousel = () => {
  const [imagen, setImagen] = useState()

  const slider = (imagen) => {
    if(imagen === 1){
      return <img src={engrane1} alt="1"/>
    } else if (imagen === 2) {
      return <img src={engrane2} alt="2"/>
    } else if (imagen === 3) {
      return <img src={engrane3} alt="3"/>
    } else if (imagen === 4) {
      return <img src={engrane4} alt="4"/>
    } else if (imagen === 5) {
      return <img src={engrane5} alt="5"/>
    } 
  }

  return (
    <div>
      <div className='slider'>
        {slider(imagen)}
      </div>
      <button onClick={() => setImagen(1)}> cambiar estado   </button>
      <button onClick={() => setImagen(2)}> cambiar estado 2 </button>
      <button onClick={() => setImagen(3)}> cambiar estado 3 </button>
      <button onClick={() => setImagen(4)}> cambiar estado 4 </button>
      <button onClick={() => setImagen(5)}> cambiar estado 5 </button>
    </div>
  )
}

export default Carrousel