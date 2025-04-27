import Link from 'next/link'
import { useEffect, useState } from 'react'

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata = {
  title: 'Home',
}

// server component
async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('im fetching!')
  return await fetch(API_URL).then((response) => response.json())
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  )
}

/* react때의 fetch -> API -> client component 
'use client' 
const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = fetch('https://nomad-movies.nomadcoders.workers.dev/movies ')
    const json = await (await response).json()
    setMovies(json)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>
*/
