import * as React from 'react';


type HeaderProps = {
  text: string
}

// type with optional string input
type SubheaderProps = {
  text?: string
}

function Header(props : HeaderProps) {
  return (
    <h1 className="primary-header">{props.text}</h1>
  )
}

function Header2(props : SubheaderProps) {
  return (
    <h1 className="primary-header">{props.text}</h1>
  )
}

export {
  Header,
  Header2
}