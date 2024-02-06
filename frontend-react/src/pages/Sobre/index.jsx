import React from 'react'
import Footer from '../../components/Footer'

const Sobre = () => {
 return (
  <>
   <section className="min-h-screen w-full banner bg-gray-100 flex justify-center items-center">
    <div className="w-full max-w-3xl">
     <div className="shared-style">
      <p>
       Neste desafio a pessoa candidata terá total liberdade de usar as
       ferramentas e linguagens que está mais familiarizado.
      </p>
      <p>
       O objetivo principal será identificar sua criatividade e a capacidade de
       resolver um problema, principalmente o potencial de implementação,
       qualidade de código, organização, boas práticas, conceitos de Clean Code
       SOLID e preocupação com desenvolvimento para grandes volumes
       transacionais.
      </p>
      <div>
      
       <p>
        Você é responsável por desenvolver a solução, definir o modelo de
        entrega, utilizando-se das ferramentas de mercado atuais, bem como por
        pensar em compartilhamento de código, versão de fontes etc. O desafio
        consiste em criar uma solução para atender um requisito de um projeto:
       </p>
      </div>
      <p>
       Nosso cliente fictício será a empresa Nunes Sports e foi solicitado pelo
       board da empresa que seja desenvolvido um sistema para exibição, criação,
       edição e deleção dos produtos vendidos pela companhia.
      </p>
      <p>Os requisitos necessários para a entrega são:</p>

      <div>
       <ul className="list-disc">
        
        <li>Ter uma base de dados com uma tabela produtos com os campos:</li>
        <li>Nome do produto</li>
        <li>Código de produto</li>
        <li>Descrição do produto</li>
        <li>Preço do produto.</li>
        <li>
         Criar uma página web na tecnologia de sua preferência para o CRUD de
         produtos.
        </li>
        <li>
         Nessa página o usuário deverá ter a habilidade de exibir, deletar,
         criar, e editar produtos que estão salvos na base.
        </li>
        <li>Todas as ações na página deverão refletir no banco de dados</li>
       </ul>
      </div>
      <p>
       IMPORTANTE: O projeto deverá estar em um repositório do git para
       conferência. Compartilhe no link disponível na página da WallJobs, o seu
       github, com as informações para acesso. CONSIDERAÇÕES FINAIS: Esperamos
       que consiga executar até o final, entretanto, mesmo que não consiga
       concluir totalmente, pedimos que entregue o que conseguir.
      </p>
     </div>
    </div>
   </section>
   <Footer />
  </>
 )
}

export default Sobre
