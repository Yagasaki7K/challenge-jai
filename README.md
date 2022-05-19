# Challenge JAI
Building a project testing to consume a API + User Experience

# O que faltou a ser adicionado?
- Typescript posteriormente para tipar as variáveis
- Testes unitários
- Feature de cadastro de login através do formulário, sem precisar de um arquivo de configuração, usando a interação do React com o jai-sdk
- Fazer o login usando a chave de autenticação do jai-sdk em comunicação com a API para verificar a existência da chave e autenticar.
- Feature de mostrar/esconder chave de acesso
- Puxar as imagens diretamente da API usando autenticação com a chave do usuário
- Responsividade
- Abordar uma maneira melhor de selecionar imagens
- Acesso ao /dashboard apenas com autenticação, se falhar, retornar ao login
- Utilidade o .env de forma adequada (esconder JAI_API_KEY/JAI_ENVIRONMENT_NAME)

# A Proposta

Sobre o modelo treinado e como consumi-lo: 

São 1000 imagens do Fashion Dataset treinadas com a JAI usando o modelo pré-treinado Resnet50 e salvas na collection chamada "x" 
Todos os IDs dessa collection estão mapeadas para as imagens originais aqui: x (basta trocar o 10000 por qualquer id da collection para retornar a imagem correta) 

Você poderá consumir o modelo já treinado usando a Auth_Key "x" 

Interface - Você deverá criar um buscador de roupas/itens. O usuário deve ser capaz de: 

Instanciar a chave para acessar os modelos criados; 
Consumir o modelo através da interface;

Seguem links para auxiliar na tarefa e que você pode usar como preferir na construção da sua interface: 

Para entender melhor a JAI:

Video Demo Fashion - x 

Notebook da Demo - x 

Documentação API - x

Documentação Javascript - x 

Documentação Python - x


### Ideias de template de interface 
Ideia 1 - Architect - https://demo.dashboardpack.com/architectui-react-pro/#/dashboards/crm%20ArchitectUI%20-%20ReactJS%20Bootstrap%205%20Admin%20UI%20Dashboard%20Template 

Ideia 2 - Adminlte - https://adminlte.io/


