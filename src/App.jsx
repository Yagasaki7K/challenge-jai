import AppDetails from './components/AppDetails';

function onSubmit() {
    console.log('submit');
}

function onForget() {
    return (
        <div>
            <h1>Forget</h1>
        </div>
    );
}

function onSignUp() {

}

const Login = () => {
    return (
        <AppDetails>
            <h2>Área de login</h2>
            <form>
                <input type="text" placeholder="Enter your KEY" />
                <input type="text" placeholder="Enter your Environment" />
                <button onClick={onSubmit}>Submit</button>
            </form>

            <div className="linkunder">
                <a onClick={onForget}>Esqueci a senha</a> - <a onClick={onSignUp}>Cadastre-se</a>
            </div>
        </AppDetails>
    );
}

export default Login;
