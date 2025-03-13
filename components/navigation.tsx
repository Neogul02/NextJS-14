'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const path = usePathname()
  const [count, setCount] = React.useState(0)
  console.log(path)
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home </Link>
          {path === '/' ? '🦆' : ''}
        </li>

        <li>
          <Link href='/about-us'>AboutUs</Link>
          {path === '/about-us' ? '🦆' : ''}
        </li>
      </ul>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </nav>
  )
}

// 모든 컴포넌트는 서버에서 랜더링됨,
// 그러나 브라우저에서 랜더링될 때는 다른 방식으로 작동함
// useclient 를 사용하면 브라우저에서만 작동하는 코드를 작성할 수 있음

// api 를 server에서 랜더링되어 오기때문에 보안 문제
