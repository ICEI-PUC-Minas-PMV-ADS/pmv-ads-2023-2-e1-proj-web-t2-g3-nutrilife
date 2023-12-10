# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-01:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-04:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-05:	O site deve permitir ao usuário disponibilizar informações do resultado das calculadoras dentro da sessão de perfil.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Abraão</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar se as paginas estão com as receitas corretas</td>
  <td>
   <ul>
    <li>RF-05	A aplicação deve disponibilizar informações nutricionais sobre grupos alimentares e receitas correspondentes</li>
   </ul>
  </td>
  <td>Todas as paginas Estarem devidamente linkadas ao grupo alimentar especifico dela</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home</li>
    <li>Acessar a sessão de Alimentos localizada no HEADER</li>
     <li>Validar se as paginas estão devidamente endereçadas</li>
   </ol>
   </td>
  <td>Todos os links das receitas devem encaminhar os usuários para as páginas descritas.</td>
  <td>Abraão</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-03: Calculadora de IMC </td>
  <td>
   <ul>
    <li>RF-02	A aplicação deve possibilitar que os usuários informem dados como altura e peso para efetuar cálculos de IMC e gasto calórico diário</li>
   </ul>
  </td>
  <td>Verificar se a calculadora de IMC esta funcionando corretamente</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Clicar na opção Calculadora > Indice de Massa corporal</li>
    <li>Informar os dados Obrigatorios e realizar o calculo</li>
    <li>Validar se o resultado fornecido esta correto com a logica de calculo de IMC</li>
    <li>Verificar se o resultado esta de acordo com a tabela exibida ao final do calculo</li>
   </ol>
   </td>
  <td>A logica da Calculadora deve estar funcionando normalmente</td>
  <td>Abraão</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-04: Calculadora de Gasto Calorico Diario </td>
  <td>
   <ul>
    <li>RF-02	A aplicação deve possibilitar que os usuários informem dados como altura e peso para efetuar cálculos de IMC e gasto calórico diário</li>
   </ul>
  </td>
  <td>Verificar se a calculadora de Gasto calorico diario esta funcionando corretamente</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Clicar na opção Calculadora > Gasto Calorico Diario</li>
    <li>Informar os dados Obrigatorios e realizar o calculo</li>
    <li>Validar se o resultado fornecido esta correto com a logica de calculo de Gasto Calorico diario de acordo com o sexo fornecido</li>
   </ol>
   </td>
  <td>A logica da Calculadora deve estar funcionando normalmente</td>
  <td>Abraão</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-05: Dados de usuario</td>
  <td>
   <ul>
    <li>RF-01:	A aplicação deve permitir que os usuários se cadastrem na plataforma fornecendo informações básicas, como nome, e-mail e senha.</li>
   </ul>
  </td>
  <td>Validar se os dados que aparecem na sessão de "Meus dados" estão de acordo com os calculos</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Realizar Login</li>
    <li>Informar os dados Obrigatorios e realizar os calculos</li>
    <li>Acessar a opção de MEUS DADOS clicando no icone de perfil </li>
    <li>Validar as informações </li>
   </ol>
   </td>
  <td>Os dados fornecidos tem que estar iguais ao do usuario logado e os resultados das calculadoras</td>
  <td>Flavio</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td> CT-06: Conversa com os Nutricionistas</td>
  <td>
   <ul>
    <li>RF-03	A aplicação deve permitir aos usuarios entrar em contato com um nutricionista</li>
   </ul>
  </td>
  <td>Verificar o redirecionamento do Whatsapp presente em um card</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Dentro da home acesse um card escrito "Destaque"</li>
    <li>Clique em "Conversar!"</li>
    <li> Valide se o encaminhamento foi feito de forma correta </li>
   </ol>
   </td>
  <td>Você deve ser redirecionando ao whatsapp para iniciar uma conversa</td>
  <td>Gabriel</td>
 </tr>
</table>

