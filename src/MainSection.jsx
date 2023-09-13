import myImg from './images/myimg.jpg'
import './index.scss'

export const MainSection = () => {
  return (
    <div className='container-main'>
      <div className='image-container'>
        <img className='my-img' src={myImg} alt='profile picture' />
      </div>
      <h2 className='name'>Kristjan Lääne</h2>
      <p className='title'>Frontend Developer</p>
      <p className='website'>kristjanlaane.com</p>
      <div className='btn-container'>
        <p className='email'>Email</p>
        <p className='linkedin'>LinkedIn</p>
      </div>
    </div>
  )
}
