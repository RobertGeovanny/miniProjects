import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  /*  const format = (userName) => `@${userName}` */

  return (
    <section className='App'>
      <TwitterFollowCard userName='capricornio1397'>
        Shawn
      </TwitterFollowCard>

      <TwitterFollowCard userName='Shawn'>
        Tiburon Rojo
      </TwitterFollowCard>
    </section>
  )
}
