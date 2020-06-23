import { useState } from 'react'
export function Biff() {
  const [l, setL] = useState(true)

  return (
    <div>
      <button onClick={() => setL(!l)}>
        {l ? 'Je suis un beuf' : 'Jag är ett stycke kött'}
      </button>
    </div>
  )
}
