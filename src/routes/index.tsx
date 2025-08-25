import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="index-page">
        <h1 className="index-page__title">
           Willkommen bei Pizza App!
        </h1>
        
        <p className="index-page__text">
          Entdecke unsere köstlichen Menüs und bestelle online!
        </p>
        
        <div className="index-page__block">
          <Link className="index-page__button" to="/products">
            Alle Produkte anzeigen
          </Link>
          
          <p className="index-page__text">
            Klicke oben, um unsere Pizzen zu sehen!
          </p>
        </div>
    </div>
  )
}
