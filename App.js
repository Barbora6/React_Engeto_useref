import { useRef } from 'react'
import movie1 from './img/movie1.jpg'
import movie2 from './img/movie2.jpg'

const App = () => {
  const refLink = useRef(null)
  const refParagraph = useRef(null)
  const refImage = useRef(null)

  const differentChanges = () => {
    refLink.current.style.color = 'orange'
    refLink.current.style.textDecoration = 'underline'
    refLink.current.textContent = 'Už umím useRef'
    refParagraph.current.style.color = 'blue'
    refParagraph.current.style.fontSize = '25px'
    // refImage.current.src = movie2

    // ZMĚNA OBRÁZKŮ PO KLIKNUTÍ
    const currentSrc = refImage.current.src;
    const movie1Src = new URL(movie1, window.location).href;
    if(currentSrc === movie1Src){
      refImage.current.src = movie2;
    } else {
      refImage.current.src = movie1;
    }
    }

  return <section>
    <button onClick={differentChanges}>Klikni</button>
    <h1 ref={refLink}>Učím se useRef</h1>
    <img ref={refImage} src={movie1} alt="" />
    <p ref={refParagraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quaerat incidunt nostrum inventore nihil, alias quisquam officia blanditiis officiis. Eum atque inventore a nulla consequatur et, quo eligendi distinctio nemo!</p>
    </section>
}

export default App

/*
useRef = hook, reference nebo-li odkaz, useRef na něco odkazuje
UseRef se používá v případě, že chceš přistupovat k nějakému prvku na stránce.

Každá reference (odkaz) má svůj stav, ke kterému přistpuješ pomocí slova current. 
*/