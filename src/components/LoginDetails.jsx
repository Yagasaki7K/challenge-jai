import styled from 'styled-components'

const AppDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 5rem;

    img {
        width: 100px;
    }

    .form {
        width: 200px;

        p {
            margin-top: -10px;
            margin-bottom: 0px;
        }

        input {
            border-radius: 2px;
            border: none;
            height: 20px;
            padding: 3px;
            margin-bottom: 20px;
            width: 200px;
        }

        button {
            border-radius: 5px;
            border: none;
            padding: 3px;
            width: 200px;
            height: 30px;
            background: #8989df;
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 2px;
            cursor: pointer;

            :hover {
                transition: 2s;
                background: #585891;
            }
        }
    }

    .linkunder {
        margin-top: 1rem;

        details {
            width: 200px;
            margin-left: 5px;
            margin-bottom: 20px;

            summary {
                color: #e5e5e5;
                cursor: pointer;
                text-decoration: underline;
            }

            a {
                color: #e5e5e5;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`

export default AppDetails