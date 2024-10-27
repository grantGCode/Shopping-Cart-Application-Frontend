
const credits = 'Photos By: @ivanjevtic_, @frankyfloress, @aiony, @alireza.d.o';

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-position-container'>
      <div className='footer-container-1'>
        <h3 className='footer-title'>Pulchra Rosa</h3>
        <p className='footer-description'>{credits}</p>
      </div>
      <div className='footer-container-2'>
        <span className='footer-copyright'>© Copyright 2024 . Rights Reserved</span>
      </div>
      <div className='footer-container-3'>
        <img className='footer-logo' src='./images/footer-logo.svg' alt='footer-logo'></img>
      </div>
    </div>
  </div>
  )
}

export default Footer
