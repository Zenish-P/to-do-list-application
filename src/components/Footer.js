import React from 'react'

export const Footer = () => {
 let footerStyle = {
  display:"sticky",
  marginBottom: "min(60vh,3px)",
 }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle} >
      <p className="text-center">    Copyright &copy; Zenish Patel </p>
    </footer>
  )
}
