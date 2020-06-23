import { useEffect, forwardRef, useRef, useState } from 'react'

export default function Index() {
  const [b, setB] = useState('')
  useEffect(() => {
    async function getBiff() {
      const response = await fetch('/api/partials/biff')
      const biff = await response.text()
      setB(biff)
    }
    getBiff()
  }, [])

  const ref = useRef(null)
  return (
    <div>
      <div>JSX over wire</div>
      <div ref={ref} dangerouslySetInnerHTML={{ __html: b }} />
    </div>
  )
}
