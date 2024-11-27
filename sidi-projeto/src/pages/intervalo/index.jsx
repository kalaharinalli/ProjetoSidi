import './styles.css'
import { useNavigate } from 'react-router-dom'
import { IoWalletOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { SlUserUnfollow } from "react-icons/sl";
import { FaCashRegister } from "react-icons/fa";


const IntervaloEntrar = () => {
    const navigate = useNavigate()
  return (
    <div className="container-intervalo">
      <div className="container-imagem">
        <h1>Nossa missão é criar soluções para um mundo mais inteligente e seguro!</h1>
      </div>
      <div className="grid-item-header">
          <div><h2>| Bom dia, Tales Tompson!</h2></div>
          <div><h2>Perfil</h2></div>
        </div>
      <div className="flex-container">
        

        <div className="flex-item-main">
          <div className="flex-item-saldo">
            <div><h3 className='h3'>Meu Saldo de Horas: <br/>00:00</h3></div>
            
            <div className='nome'>
            <div className='verde'><h3>Terça, 5 de fevereiro 2024</h3></div>
            <div className='h4'><h4>Jornada</h4></div>
            </div>
            <div className='outronome'>
              <div className='painel'>
                <div><h3>Entrada</h3></div>
                <div><h4>Planejado 12:00</h4></div>
              </div>
              <div className='painel'>
                <div><h3>início do Intervalo</h3></div>
                <div><h4>Planejado 14:00 | 14:30</h4></div>
              </div>
              <div className='painel'><h3>Fim do Intervalo</h3></div>
              <div className='painel'>
                <div><h3>Saída</h3></div>
                <div><h4>Planejado 20:00</h4></div>
              </div>
            </div>
            <div><button className='buttonInter' type="submit" onClick={() => navigate("/intervalo")}>Intervalo</button>
            </div>
            <div><button className='buttonSai' type="submit" onClick={() => navigate("/intervalo")}>Saída</button>
            </div>
            
            
            

          </div>
          <div className='caixas'><div className="flex-item"><FaCashRegister /><p>Meus <br/> Pontos</p></div>
          <div className="flex-item"><IoWalletOutline /><p>Pagamentos</p></div>
          <div className="flex-item"><GrMapLocation /><p>Minha <br/> Localização</p> </div>
          <div className="flex-item"><SlUserUnfollow /><p>Justificar <br/> Faltas</p></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default IntervaloEntrar;

    
