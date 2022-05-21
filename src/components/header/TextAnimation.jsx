import React from 'react'
import TypeAnimation from 'react-type-animation';


const TextAnimation = () => {
  return (
    <div style={{color: "#ff5bff", fontWeight: "700"}}>
        <TypeAnimation
            cursor={true}
            sequence={[
              'Full-Stack Developer',
              500,
              'UI and UX Designer',
              500,
              'Graphic Designer',
              500,
              'Virtual assistant',
              500,
              'Video Editor',
              500,
              'Digital Marketer',
              500,
            ]}
            wrapper="h2"
            repeat={Infinity}
           />
    </div>
  )
}

export default TextAnimation