import './pag.css'
import Arcade from './assets/Arcade.svg'

function Inicio() {
    return (
        <>
            <div> 
                <h1>Welcome to Secret Arcade</h1>
                <img src={Arcade} alt="Arcade logo" className='arcadeLogo' />
            </div>
            <div>
                <button className='button'>SING UP</button>
                <button className='button'>LOG IN</button>


            </div>
        </>
    )
}
export default Inicio