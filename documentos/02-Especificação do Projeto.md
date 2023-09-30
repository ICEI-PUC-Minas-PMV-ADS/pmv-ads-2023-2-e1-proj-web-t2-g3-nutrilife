# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Usuário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa interessada em obter informações nutricionais assertivas e obter 
melhores informações sobre sua saúde com base em dados confiáveis 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

  1. Informar dados pessoais para cálculos de IMC e gasto calórico 
diário.
  
2. Acesso a conteúdo para familiarização sobre principais 
macronutrientes, porções e propriedades dos alimentos.
  
3. Possibilidade de envio de mensagens para um profissional 
especializado para esclarecer dúvidas sobre sua dieta, por 
WhatsApp ou outra ferramenta de mensagens. </td>
</tr> 
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Usuario            | Cadastrar dados de peso, altura e restrições alimentares  | Realizar cálculos de Índice de Massa Corporal (IMC) e calorias diárias  |
| Usuario            | Ter acesso ao resultado das calculadoras de IMC e calorias  | Fornecer dados que irão subsidiar um plano alimentar adequado|
| Usuario            | Acessar informações claras sobre grupos alimentares e porções de alimentos |Ter melhor entendimento sobre os componentes de uma dieta saudável |
| Usuario            | Me comunicar com um profissional de nutrição | Sanar dúvidas sobre o plano alimentares e informações contidas na página |
| Usuario            | Gerar um cardápio diário com base nas informações de necessidades calóricas | Facilitar o cumprimento de um plano alimentar e objetivos definidos |

## Requisitos do Projeto


### Requisitos Funcionais

|  --ID---| Descrição                | Prioridade |
|----------|---------------------------------|----|
| RF-01    | O site deve permitir que os usuários se cadastrem na plataforma fornecendo informações básicas, como nome, e-mail e senha.| ALTA | 
| RF-02    | Os Usuarios poderão realizar cálculos IMC | ALTA |
| RF-03    | o site deve permitir aos Usuarios o Redirecionamento a plataforma de envio e recebimento de mensagens(Whatsapp e E-mail) para sanar dúvidas com profissional de nutrição | MEDIA   |
| RF-04    | O Site deve apresentar refeições e ingredientes para criação de cardápio Diario | MEDIA   |
| RF-05    | A aplicação deve permitir aos perfis de usuário realizarem login | ALTA   |
| RF-06    | A aplicação deve disponibilizar opção de pesquisa | MEDIA  |
| RF-07    | A aplicação deve disponibilizar grupos alimentares com informações nutricionais correspondentes  | ALTA  |
| RF-08    | Os Usuarios poderão realizar cálculos de consumo diário de calorias | MEDIA |
| RF-09    | Os Usuarios poderão Favoritar as Receitas que sera mostrado no perfil de usuario | MEDIA |



**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser compatível com exibição em todos os dispositivos e com os navegadores Firefox, Chrome, Safari e Edge. | ALTA   | 
| RNF-02 | Garantir que todas as informações nutricionais fornecidas na plataforma sejam precisas, atualizadas e baseadas em fontes confiáveis. Isso envolve a verificação regular das fontes de dados.| ALTA   |
| RNF-03 | Manter a plataforma atualizada com as últimas diretrizes nutricionais e tecnológicas para fornecer informações precisas e relevantes.  | MEDIA   | 
| RNF-04 | Priorizar o design intuitivo e a facilidade de uso para usuários com diferentes níveis de familiaridade com a tecnologia, tornando a plataforma amigável para todos. | ALTA   | 

**Prioridade: Alta / Média / Baixa. 

