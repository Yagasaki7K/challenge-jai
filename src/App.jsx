import AppDetails from './components/AppDetails';

const Login = () => {

    function onSubmit() {
        let key = document.getElementById('key').value;
        // useContext(KeyValue) = key
        
        if ((key != 0) && (key != '') && (key != null) && (key != undefined))  {
            // setKeyDefined(key);
            window.location.href = "/dashboard";
        }
    }

    return (
        <AppDetails>
            <img src="/src/assets/logo.png"/>
            <h2>Área de login</h2>
            <div className="form">
                <p>Coloque sua chave</p>
                <input type="password" id="key" placeholder="Insira sua chave de autenticação" />
                <button onClick={onSubmit}>Logar</button>
            </div>

            <div className="linkunder">
                <details>
                    <summary>Esqueci a senha</summary>
                    <p>Você poderá a chave de acesso única através do seu e-mail, verifique a caixa de SPAM. Se não estiver disponível, cadastre uma nova e verifique se o e-mail foi digitado corretamente.</p>
                </details>

                <details>
                    <summary>Cadastre-se</summary>
                    <p>Para cadastrar uma nova senha, você pode acessar nossa <a href="https://get-free-auth-key.unicornplatform.page/" target="_blank">área de cadastro</a></p>
                </details>
            </div>
        </AppDetails>
    );
}

export default Login;
