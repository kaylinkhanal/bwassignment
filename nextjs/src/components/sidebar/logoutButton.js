'use client'
import React from 'react'

const LogoutButton = (props) => {
  return (
    <button className={'text-'+props.color+ '-400 p-2'}>Logout {props.color}</button>
  )
}

export default LogoutButton