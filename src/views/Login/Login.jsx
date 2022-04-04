import React, {useState} from 'react'

function Login() {

    const [userStatus, setUserStatus] = useState(false);

  return (
    <section className='login-container'>
        <article className='login'>
            <h3>{userStatus? 'Inicia sesión' : 'Regístrate'}</h3>
            <form action="">
                <label htmlFor="">Mail</label>
                <input type="email" name="" id="email" />

                <label htmlFor="">Contraseña</label>
                <input type="password" />

                <p onClick={()=> setUserStatus(!userStatus)}>{userStatus? '¿No tienes cuenta? Regístrate' : 'Ya posees cuenta, inicia sesión'}</p>
                <input type="submit" className='btn-login' value={userStatus? 'Iniciar sesión' : 'Regístrate' } />
            </form>
        </article>
    </section>
  )
}

export default Login;