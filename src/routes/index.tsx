import { createFileRoute } from '@tanstack/react-router'
// import { products } from "../gameiro.json"

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  )
}
