import type { NextPage } from 'next'
import Image from 'next/image'
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navigation />
      </header>
      <main className="container">Hello, Shanghai</main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://mask.io"
          target="_blank"
          rel="noopener noreferrer">
          Powered by Mask Network
        </a>
      </footer>
    </div>
  )
}

export default Home
