import './styles.css'
import { useNavigate } from 'react-router-dom'
import { FaUser} from "react-icons/fa";
import { MdLock } from "react-icons/md";


const Login = () => {
    const navigate = useNavigate()
    return (
        
        <div className="container-login">
            <div className='container-image'></div>
            <div className="container-form-login">
            <img src='/imagens/Logo login-cadastro.svg'/>
                <div className="header-title">
                    <h1>Login</h1>
                    <p className=""></p>
                </div>


                <form>
                    <div className="content-input">
                        <input type="text" placeholder="Usuário" id="user-text" required />
                        <FaUser className='icon' />
                        
                    </div>

                    <div className="content-input">
                        <input type="password" placeholder="Senha" id="password-text" required />
                        <MdLock className='icon' />
                        
                        
                    </div>
                    <div className="container-nav">
                        
                        <p>lembre-se de mim</p>
                        <a className='forgot-password a-text' href="/esqueceu">Esqueceu sua senha?</a>
                    </div>

                    <button className='button' type="submit" onClick={() => navigate("/home")}>Entrar</button>
                    <div className="container-nav">
                        <p>Não tem conta? <a className='cadastre-a a-text' href="/register">Cadastre-se</a></p>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login

