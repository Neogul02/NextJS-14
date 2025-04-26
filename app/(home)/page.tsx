import { useEffect, useState } from 'react'

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata = {
  title: 'Home',
}

// server component
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // 5초 대기
  console.log('im fetching!')
  return await fetch(URL).then((response) => response.json())
}

export default async function HomePage() {
  const movies = await getMovies()
  return <div>{JSON.stringify(movies)}</div>
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
