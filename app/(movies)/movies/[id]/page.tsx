export default async function MovieDetail({ params }: { params: { id: string } }) {
  const { id } = await params // 비동기적으로 params를 처리
  console.log('paramsId -->', id) // { id: '1' } // 서버에서만 사용 가능
  return <h1>Movie {id}</h1>
}
