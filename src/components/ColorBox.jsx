import React, { useEffect, useState } from 'react'

const ColorBox = (props) => {

    const [color, setColor] = useState("red")

        const handleClick = (event) => {
            const colors = ["loyalblue", "orange", "black", "#730000"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setColor(randomColor);
        }
    

  return (
    <mesh 
    {...props}
    onClick={handleClick}>
        <boxGeometry args={[3,3,3]}/>
        <meshStandardMaterial color={color}/>
    </mesh>
  )
}

export default ColorBox