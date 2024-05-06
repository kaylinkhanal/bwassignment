'use client'
import React from 'react'

const CustomTable = (props) => {
debugger;
  return (
    <>

                <th>{props.headers[0]}</th>
                <th>{props.headers[1]}</th>
            <tr>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
                <td>3</td>
            </tr>
    </>
  )
}

export default CustomTable