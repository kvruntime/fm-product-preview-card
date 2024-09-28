import './App.css'
import ProductCard from './ui/product-card'

function App() {

  return (
    <section className='min-h-screen flex flex-col items-center bg-[--cream] '>
      <div className='grow flex flex-col items-center justify-center'>
        <ProductCard />
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </section>
  )
}

export default App
