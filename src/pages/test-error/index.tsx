import { useEffect } from 'react'

const TestErrorPage = () => {
  useEffect(() => {
    throw new Error('Simulated error.')
  }, [])

  return <div>Looo</div>
}

export default TestErrorPage
