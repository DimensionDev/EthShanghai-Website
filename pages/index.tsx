import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <main>
      ETH Shanghai Website
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://mask.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mask Network
        </a>
      </footer>
    </div>
  )
}

export default Home
