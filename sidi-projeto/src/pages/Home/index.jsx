import './styles.css';

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-imagem">
        <h1>Nossa missão é criar soluções para um mundo mais inteligente e seguro!</h1>
      </div>
      <div className="flex-container">
        <div className="grid-item-header">
          <h2>| Bom dia, Tales Tompson!</h2>
        </div>

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
                <div><h4>Planejado 14:00|14:30</h4></div>
              </div>
              <div className='painel'><h3>Fim do Intervalo</h3></div>
              <div className='painel'>
                <div><h3>Saída</h3></div>
                <div><h4>Planejado 20:00</h4></div>
              </div>
            </div>
            <div><button>Entrar</button></div>

          </div>
          <div className='caixas'><div className="flex-item"> <p>Meus <br/> Pontos</p></div>
          <div className="flex-item"><p>Pagamentos</p></div>
          <div className="flex-item"> <p>Minha <br/> Localização</p> </div>
          <div className="flex-item"> <p>Justificar <br/> Faltas</p></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
