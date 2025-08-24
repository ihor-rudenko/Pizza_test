import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    // <div className="bg-[url(/image/pizza.jpg)] bg-cover bg-no-repeat lg:bg-center bg-right min-h-screen flex flex-col items-center justify-center px-2">
    <div className="bg-[url(/image/pizza-bg.jpg)] bg-cover bg-no-repeat lg:bg-center bg-right min-h-screen flex flex-col items-center justify-center px-2">
        {/* <span className='text-7xl mb-6'>🍕</span> */}
        <h1 className="text-6xl font-bold text-white mb-4 text-center lh-[120%]">
           Willkommen bei Pizza App!
        </h1>
        
        <p className="text-2xl text-white mb-10 text-center">
          Entdecke unsere köstlichen Menüs und bestelle online!
        </p>
        
        <div className="space-y-4 flex flex-col items-center">
          <Link to="/products" className="card-button inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
            Alle Produkte anzeigen
          </Link>
          
          <p className="text-xl text-white mt-4 text-center">
            Klicke oben, um unsere Pizzen zu sehen!
          </p>
        </div>
    </div>
  )
}
