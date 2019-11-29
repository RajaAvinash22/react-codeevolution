import React from 'react'

function Button({handleClick, children}) {
    console.log('Rendering Button -',children)
  return (
    <div>
      <button onClick={handleClick}>
          Increement Salary2{children}
      </button>
    </div>
  )
}

export default React.memo(Button)
