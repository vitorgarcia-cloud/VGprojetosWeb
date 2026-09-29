// Dados dos Clientes Fictícios e Casos de Sucesso por Serviço
// Cada serviço segue a metodologia: Problema, Solução Técnica e Resultado.
// Possui suporte a 2 imagens (Antes e Depois) por projeto.

export const clientsProjectsData = [
  {
    id: 'nei',
    name: 'Nei Ultrassom',
    shortName: 'Nei Ultrassom',
    segment: 'Máquinas de Ultrassom',
    description: 'Prestador de serviço de soldagem ultrassonica',
    logoIcon: 'cliente_nei_ultra.jpg',
    projects: [
      {
        id: 'eng-rev-nei-ultra',
        serviceTypeId: 'eng-rev',
        serviceTypeName: 'Engenharia reversa',
        title: 'Engenharia reversa de um suporte para maquina de soldagem',
        problem: 'O cliente tinha o suporte para a maquina, mas não possuia os desenhos para sua fabricação.',
        technicalSolution: 'Engenharia reversa realizada, modelagem 3D e documentos para fabricação emitidos.',
        result: 'Documentos emitidos para a fabricação de diversas maquinas.',
        images: {
          before: {
            title: 'Antes: ',
            description: 'Suporte da Maquina de Soldagem',
            tag: 'ANTES',
            url: '/nei_eng_rev_antes.jpg'
          },
          after: {
            title: 'Depois:',
            description: 'Modelagem e detalhamento 2D realizados.',
            tag: 'DEPOIS',
            url: '/nei_eng_rev_depois.jpg'
          }
        }
      }
    ]
  },
  {
    id: 'pepthus',
    name: 'Pepthus Usinagem',
    shortName: 'Pepthus',
    segment: 'Usinagem e Fabricação Mecânica',
    description: 'Empresa especializada em fabricação de peças e usinagem mecânica',
    logoIcon: 'cliente_pepthus.jpg',
    projects: [
      {
        id: 'model-pepthus',
        serviceTypeId: 'model-3d',
        serviceTypeName: 'Modelagem 3D e Detalhamento 2D',
        title: 'Modelagem e detalhamento para maquinas especiais',
        problem: 'Desenhos antigos e desatualizados, que geravam falha de comunicação entre engenharia e produção',
        technicalSolution: 'Modelagem 3D baseada no desenho anteriormente fornecido e novos ajustes conforme solicitado pelo cliente',
        result: 'Documentação nova emitida e fabricação no CNC com qualidade e precisão',
        images: {
          before: {
            title: 'Antes: ',
            description: 'Desenho desatualizado e comunicação entre setores comprometida',
            tag: 'ANTES',
            url: '/pep_model3d_antes.jpg'
          },
          after: {
            title: 'Depois: ',
            description: 'Modelagem 3D feita, documentos para fabricação emitidos e revisões de projetos concluídas',
            tag: 'DEPOIS',
            url: '/pep_model3d_depois.jpg'

          }
        }
      },
      {
        id: 'conv-pepthus',
        serviceTypeId: 'conv-arq',
        serviceTypeName: 'Conversão de arquivos',
        title: 'Modelagem de peças com base no desenho 2D',
        problem: 'Desenhos 2D sem arquivos para fabricação na maquina CNC',
        technicalSolution: 'Conversão do desenho 2D para modelagem 3D e emissão de arquivos .STEP',
        result: 'Tempo de fabricação acelerado e precisão garantida com a nova documentação.',
        images: {
          before: {
            title: 'Antes: ',
            description: 'Apenas desenho 2D, sem qualquer modelo tridimensional',
            tag: 'ANTES',
            url: '/pep_model3d_antes2.jpg'
          },
          after: {
            title: 'Depois:',
            description: 'Modelo 3D gerado e novo detalhamento vínculado a peça',
            tag: 'DEPOIS',
            url: '/pep_model3d_depois2.jpg'

          }
        }
      }
    ]
  },
  {
    id: 'generic',
    name: 'Generic Empresas',
    shortName: 'generic',
    segment: 'Diversos setores',
    description: 'Segmento dedicado aos mais variados clientes',
    logoIcon: '',
    projects: [
      {
        id: 'generic-table',
        serviceTypeId: 'table',
        serviceTypeName: 'Padronização',
        title: 'Padronização de Templates (Documentação)',
        problem: 'O cliente não tinha uma documentação padronizada. Isso resultava em folhas diferentes, tabelas e desenhos sem padrões. Isso tirava o profissionalismo.',
        technicalSolution: 'Emitidos templates de folhas, padronização de cotas, ângulos, normas utilizadas (ISO), tabelas de corte, furos e lista de materias (BOM). ',
        result: 'Documentos padronizados evitando retrabalhos e proporcionando mais profissionalismo e valor agregado para a empresa.',
        images: {
          before: {
            title: 'Antes: ',
            description: 'Documentação Bagunçada e Confusa',
            tag: 'ANTES',
            url: '/genericTemplateAntes.jpg'
          },
          after: {
            title: 'Depois:',
            description: 'Documentação e Templates padronizados.',
            tag: 'DEPOIS',
            url: '/genericTemplateDepois.jpg'
          }
        }
      },
      {
        id: 'generic-library',
        serviceTypeId: 'library',
        serviceTypeName: 'Criação de Bibliotecas',
        title: 'Padronização de Bibliotecas',
        problem: 'O cliente não tinha bibliotecas padronizadas de elementos mecânicos. Isso resultava em lista de materiais com duplicidade, gerava retrabalho no CAD e gastava mais tempo de projeto com a procura de elementos apropriados.',
        technicalSolution: 'Criamos uma biblioteca com elementos de fixação e perfis padronizados, seguindo a norma ISO. E linkamos com o software CAD do cliente.',
        result: 'Eliminamos os problemas com elementos duplicados, retrabalhos desnecessários para garantir a confiabilidade da BOM e ganhamos velocidade no desenvolvimento do projeto.',
        images: {
          before: {
            title: 'Antes: ',
            description: 'Exemplo de pasta com varios arquivos do mesmo perfil.',
            tag: 'ANTES',
            url: '/libraryAntes.jpg'
          },
          after: {
            title: 'Depois:',
            description: 'Biblioteca de perfis organizada.',
            tag: 'DEPOIS',
            url: '/libraryDepois.jpg'
          }
        }
      }
    ]
  }
];
