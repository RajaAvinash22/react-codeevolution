import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
  return ReactDom.createPortal(
    <div>
      portal demo
    </div>,
    document.getElementById('portal-root')

  )
}

export default PortalDemo
