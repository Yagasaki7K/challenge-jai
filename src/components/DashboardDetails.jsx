import styled from 'styled-components'

const DashboardDetails = styled.div`
    
    nav {
        background: #2d6886;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;

        img {
            margin: 5px 10px 5px 10px;
        }

        p {
            margin-right: 100px;
        }

        a {
            margin-top: 15px;
            margin-right: 20px;
            color: #fff;
            text-decoration: none;

            :hover {
                color: #8e8edf;
                transition: 1s;
            }
        }
    }

    .content {
        margin-left: 50px;

        .functionEye {
            cursor: pointer;
        }

        h1 {
            margin-bottom: -10px;
        }

        hr {
            margin: 30px 0 30px -25px;
            width: 100%;
        }

        .copyright {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
        }

        .contentBox {
            display: flex;

            .box-center {
                button {
                    margin-right: 10px;
                }
            }

            .box-right {
                border: 1px solid #e5e5e5;

                img {
                    width: 300px;
                }
            }
            
            .box-left, .box-center {
                margin-right: 30px;
            }

            .box-left, .box-center {
                width: 400px;
            }

            .status {
                color: green;
            }

            .status-off {
                color: red;
            }
        }

        .contentBox-alt {
            display: flex;
            margin-top: 0px;

            .box-center {
                button {
                    margin-right: 10px;
                }
            }

            .box-right {
                border: 1px solid #e5e5e5;

                img {
                    width: 300px;
                    height: 400px;
                }
            }
            
            .box-left, .box-center {
                margin-right: 30px;
            }

            .box-left, .box-center {
                width: 400px;
            }
        }
    }
`

export default DashboardDetails