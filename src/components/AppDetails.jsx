import styled from 'styled-components'

const AppDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 20rem;

    form {
        width: 200px;

        input {
            border-radius: 2px;
            border: none;
            height: 20px;
            padding: 3px;
            margin-bottom: 10px;
            width: 200px;
        }

        button {
            border-radius: 5px;
            border: none;
            padding: 3px;
            width: 200px;
            height: 30px;
            background: #00bcd4;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 2px;
            cursor: pointer;

            :hover {
                transition: 2s;
                background: #008c9e;
            }
        }
    }

    .linkunder {
        margin-top: 1rem;

        a {
            color: #e5e5e5;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export default AppDetails