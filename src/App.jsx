import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({ count: [0, 1, 2, 3, 4, 5, 6], currentCount: 0 });
  const [active, setactive] = useState(false);
  function handleClickEvent(clickCount) {
    if (!active && clickCount === 6) {
      setactive(true);
      setCount({ ...count, currentCount: clickCount })
      let timer = setInterval(() => {
        clickCount--;
        setCount({ ...count, currentCount: clickCount })
        if (clickCount <=-1 ) {
          clearInterval(timer)
          setCount({ ...count, currentCount: 0 });
          setactive(false);
        }
      }, 200)
    }
  }

  return (
    <>
      <div className="wrapper">
        {count.count.map((value, key) => (
          <div className={`box ${'item-' + key}`} key={key} onClick={() => handleClickEvent(value)} style={{ 'backgroundColor': `${active && value === count.currentCount ? 'red' : 'grey'}` ,'position':'absolute'}} />
        ))}
      </div>
    </>
  )
}

export default App
