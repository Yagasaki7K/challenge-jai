import { React, useState, useContext } from 'react'
// import { KeyValue } from '..';
import DashboardDetails from '../components/DashboardDetails'

// Uncaught ReferenceError: process is not defined // vvvvvvvvvvvvvv
// import 'dotenv/config'

// Uncaught Error: Built-in TLD list disabled // vvvvvvvvvvvvvvvvvvv
// import { getStatus, authenticate, authenticateFromEnvironmentVariable, jaiEnvironmentFromEnvironmentVariable,
//     insertData, getFields, isDatabaseNameValid, checkInsertedData, addData } from 'jai-sdk'

// Uncaught ReferenceError: process is not defined // vvvvvvvvvvvvvv
// if (process.env.JAI_API_KEY) {
//     authenticateFromEnvironmentVariable()
//     console.debug(authMessage());
// }

// if (process.env.JAI_ENVIRONMENT_NAME) {
//     jaiEnvironmentFromEnvironmentVariable()
//     console.debug(authMessage());
// }

// app.get('/get-status', (req, res) => {
//     getStatus().then(data => {
//         res.send(data);
//     })
// })

const api = 'https://myceliademo.blob.core.windows.net/fashion-imgs/images/10000.jpg'

const dashboard = () => {

    // const value = useContext(KeyValue);

    const [status, setStatus] = useState('')
    const [canOrNot, setCanOrNot] = useState('PODE')
    const [keyValue, setKeyValue] = useState('')
    const [hiddenKey, setHiddenKey] = useState('*********************')
    const [valueImage, setValueImage] = useState(10000)

    // setKeyValue(value);

    function changeHiddenKey() {
        if (keyValue === '*********************') {
            // setKeyValue(value);
            document.getElementById("eyeClass").classList.remove('uil-eye');
            document.getElementById("eyeClass").classList.add('uil-eye-slash');
        } else {
            // setKeyValue(hiddenKey);
            document.getElementById("eyeClass").classList.add('uil-eye');
            document.getElementById("eyeClass").classList.remove('uil-eye-slash');
        }
    }

    if (status === 'OFFLINE') {
        setStatus(<strong className="status-off">OFFLINE</strong>)
        setCanOrNot('NÃO PODE')
    }

    if (status === 'ONLINE') {
        setStatus(<strong className="status">ONLINE</strong>)
        setCanOrNot('PODE')
    }

    fetch(api)
    .then(data => { 
        if(data.status === 200) {
            setStatus('ONLINE')
        } else {
            setStatus('OFFLINE')
        }
    })

    return (
        <DashboardDetails>
            <nav>
                <img src="/src/assets/logo.png" />
                <p>Dashboard JAI - Challenge</p>
                <p>&nbsp;|&nbsp;</p>
                <a href="/"><i className="uil uil-signout"></i> Logout</a>
            </nav>

            <div className="content">
                <h1>Dashboard</h1>
                <p>Bem vindo ao dashboard JAI!</p>
                <p>Chave: {keyValue} &nbsp;
                    <i className="uil uil-eye functionEye" id="eyeClass" onClick={changeHiddenKey}></i> </p>

                <div className="contentBox">
                    <div className="box-left">
                        <h2>Status do servidor</h2>
                        <p>O servidor está: {status}</p>
                        <i className="uil uil-info-circle"> Isso significa que você <strong>{canOrNot}</strong> puxar todas as imagens do nosso banco de dados</i>
                    </div>

                    <div className="box-center">
                        <h2>Imagens do servidor</h2>
                        <input type="number" id="inputImage" placeholder='Insira um número' onInput={e => setValueImage(e.target.value)}
                            max={10000} min={1} />
                        <p><i className="uil uil-info-circle"> Selecione ou digite um número de 10000 a 1 para visualizar as imagens do nosso banco.</i></p>
                    </div>

                    <div className="box-right">
                        <img src={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${valueImage}.jpg`} />
                    </div>
                </div>

                <div className="contentBox-alt">
                    <div className="box-left">
                        <h2>Como funciona nosso banco?</h2>
                        <p>Nosso sistema identifica o número que você inseriu, vai até o banco de dados
                            e puxa as imagens de acordo com o número citado. Futuramente adicionaremos os
                            detalhes de cada produto para facilitar na consulta. Use a consulta do MAIOR
                            para o MENOR ou receberá apenas imagens quebradas.
                        </p>
                    </div>

                    <div className="box-center">
                        <h2>O que é a JAI?</h2>
                        <p>Feito para o mundo real: o JAI trabalha com dados de produtos de cauda longa e o fluxo constante de novos produtos, usuários e marcas e facilita as interações, <a href="https://getjai.com/" target="_blank">acesse o site oficial</a> e entenda mais sobre a empresa e a sua proposta de facilitar a interação com dados e IA...</p>
                    </div>
                </div>

                <hr />
            <div className="copyright">Desenvolvido por Anderson Marlon - Teste Técnico da JAI - Realizado em Maio de 2022</div>
            </div>

        </DashboardDetails>
    )
}

export default dashboard