import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
             <GrLinkedinOption />
        </div>
        <div>
             <BsGithub />
        </div>
        <div>
             <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia