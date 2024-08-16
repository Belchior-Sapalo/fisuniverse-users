import React from 'react'
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="logo-link" to='/'>.Fis<span style={{color: "red"}}>universe</span></Link>
  )
}
