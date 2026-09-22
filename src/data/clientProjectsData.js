// Dados dos Clientes Fictícios e Casos de Sucesso por Serviço
// Cada serviço segue a metodologia: Problema, Solução Técnica e Resultado.
// Possui suporte a 2 imagens (Antes e Depois) por projeto.

export const clientsProjectsData = [
  {
    id: 'techmach',
    name: 'TechMach Indústria & Automação',
    shortName: 'TechMach',
    segment: 'Automação & Máquinas Especiais',
    description: 'Fabricante de células automatizadas e dispositivos de alta performance para a indústria manufatureira.',
    logoIcon: 'gear-circuit',
    projects: [
      {
        id: 'proj-modelagem-3d-techmach',
        serviceTypeId: 'modelagem-3d',
        serviceTypeName: 'Modelagem 3D Paramétrica',
        title: 'Redesenho Paramétrico de Braço Manipulador Automatizado',
        problem: 'O modelo original apresentava interferências nas articulações e peso excessivo, sobrecarregando os servomotores durante a aceleração.',
        technicalSolution: 'Remodelagem 3D paramétrica completa com otimização de perfis tubulares, análise de colisões dinâmicas e posicionamento balanceado de componentes.',
        result: 'Redução de 32% no peso do manipulador e eliminação completa de interferências mecânicas no ciclo operacional.',
        images: {
          before: {
            title: 'Antes: Modelo Geométrico Pesado & Interferências',
            description: 'Geometria densa não paramétrica com atrito e colisões identificadas nas juntas rotativas.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Montagem Paramétrica Otimizada',
            description: 'Estrutura aliviada, juntas articuladas com folgas funcionais e parametrização para ajustes rápidos.',
            tag: 'DEPOIS'
          }
        }
      },
      {
        id: 'proj-animacao-techmach',
        serviceTypeId: 'animacao-montagem',
        serviceTypeName: 'Manuais e Vistas Explodidas',
        title: 'Manual Técnico com Vistas Explodidas e Sequência de Montagem',
        problem: 'Operadores na linha de montagem com frequentes dúvidas sobre o posicionamento de rolamentos e anéis elásticos, gerando paradas na montagem.',
        technicalSolution: 'Desenvolvimento de diagramas isométricos explodidos com balões de chamada padronizados (BOM) e roteiro visual passo a passo.',
        result: 'Queda de 60% no tempo de integração de novos montadores e erro zero de sequência de montagem.',
        images: {
          before: {
            title: 'Antes: Documentação Textual Confusa',
            description: 'Instruções sem apoio visual explodido, dificultando a identificação da ordem de inserção dos componentes.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Vista Explodida Técnica & Lista de Peças (BOM)',
            description: 'Diagrama isométrico de alta clareza com numeração vinculada à lista de materiais.',
            tag: 'DEPOIS'
          }
        }
      }
    ]
  },
  {
    id: 'steelform',
    name: 'SteelForm Estruturas & Caldeiraria',
    shortName: 'SteelForm',
    segment: 'Estruturas Metálicas & Construção Industrial',
    description: 'Especialista em fabricação pesada de mezaninos, passarelas e tubulações industriais sob medida.',
    logoIcon: 'beam-structure',
    projects: [
      {
        id: 'proj-estruturas-steelform',
        serviceTypeId: 'estruturas-metalicas',
        serviceTypeName: 'Projetos Estruturais & Caldeiraria',
        title: 'Detalhamento Executivo de Mezanino Industrial com Passarela',
        problem: 'Desenhos conceituais sem detalhamento de ligações parafusadas e sem lista de corte, gerando atrasos na caldeiraria.',
        technicalSolution: 'Modelagem 3D estrutural completa, dimensionamento de conexões parafusadas/soldadas e geração de pranchas técnicas executivas de montagem.',
        result: 'Fabricação em tempo recorde sem necessidade de ajustes em campo e lista de materiais precisa com 0% de sobra excessiva.',
        images: {
          before: {
            title: 'Antes: Esboço Preliminar Sem Conexões Detalhadas',
            description: 'Falta de definição nas placas de base, contraventamentos e detalhamento de soldas normatizadas.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Estrutura 3D Detalhada com Ligações Prontas',
            description: 'Detalhamento completo das vigas, contraventamentos, furações padronizadas e pranchas de montagem.',
            tag: 'DEPOIS'
          }
        }
      },
      {
        id: 'proj-usinagem-corte-steelform',
        serviceTypeId: 'usinagem-corte',
        serviceTypeName: 'Detalhamento para CNC e Laser',
        title: 'Planificação de Chapas Dobradas e Geração de Arquivos DXF',
        problem: 'Fator de dobra K inadequado causava erros dimensionais de até 4mm após a conformação das peças dobradas.',
        technicalSolution: 'Cálculo de compensação de dobra conforme tabela do ferramental do cliente e exportação de perfis vetorizados 1:1 limpos para corte laser.',
        result: 'Precisão milimétrica nas peças conformadas, eliminando retrabalhos no setor de soldagem.',
        images: {
          before: {
            title: 'Antes: Planificação Sem Compensação de Dobra',
            description: 'Dimensões descalibradas na planificação 2D resultando em peças curtas após a prensa dobradeira.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Perfis Vetorizados Otimizados para CNC',
            description: 'Planificações com fator K calibrado, marcações de dobra automáticas e geometrias prontas para laser.',
            tag: 'DEPOIS'
          }
        }
      }
    ]
  },
  {
    id: 'aeroprecision',
    name: 'AeroPrecision Componentes de Precisão',
    shortName: 'AeroPrecision',
    segment: 'Dispositivos de Medição & Usinagem de Precisão',
    description: 'Empresa focada em componentes de alta tolerância para aeroespacial, dispositivos de controle e gabaritos de medição.',
    logoIcon: 'precision-dial',
    projects: [
      {
        id: 'proj-detalhamento-2d-aeroprecision',
        serviceTypeId: 'detalhamento-2d',
        serviceTypeName: 'Detalhamento Técnico 2D',
        title: 'Pranchas Técnicas 2D com GD&T para Dispositivo de Medição',
        problem: 'Falta de toleranciamento geométrico (GD&T) nos desenhos 2D gerava rejeições frequentes no setor de controle de qualidade.',
        technicalSolution: 'Elaboração de pranchas 2D em conformidade com normas ABNT/ISO, aplicando tolerâncias de batimento, planeza, posição e indicação de rugosidade Ra.',
        result: 'Aprovação de 100% dos lotes usinados na máquina tridimensional de medição (CMM).',
        images: {
          before: {
            title: 'Antes: Desenho Básico Apenas com Cotas Lineares',
            description: 'Ausência de referências de datum e tolerâncias geométricas, gerando ambiguidades na usinagem.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Prancha Executiva Rigorosa (Normas ABNT/ISO)',
            description: 'Tolerâncias de forma, orientação e posição totalmente especificadas com símbolos normativos claros.',
            tag: 'DEPOIS'
          }
        }
      },
      {
        id: 'proj-engenharia-reversa-aeroprecision',
        serviceTypeId: 'engenharia-reversa',
        serviceTypeName: 'Engenharia Reversa',
        title: 'Reconstrução Paramétrica 3D de Carcaça de Bomba Centrífuga',
        problem: 'Equipamento importado antigo sem documentação técnica disponível e com a carcaça fundida desgastada.',
        technicalSolution: 'Aquisição de medidas de precisão, digitalização e reconstrução paramétrica dos canais internos e volutas em ambiente CAD.',
        result: 'Matriz de fundição e usinagem gerada a partir do novo modelo 3D, restabelecendo a reposição nacional da peça.',
        images: {
          before: {
            title: 'Antes: Peça Física Desgastada Sem Histórico CAD',
            description: 'Componente com avarias superficiais e sem arquivos digitais para reposição no mercado.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Modelo Sólido Paramétrico 100% Reconstruído',
            description: 'Geometria restaurada com árvore de recursos editável e espessuras de parede uniformes.',
            tag: 'DEPOIS'
          }
        }
      }
    ]
  },
  {
    id: 'nexus-robotica',
    name: 'Nexus Células Robotizadas',
    shortName: 'Nexus Robótica',
    segment: 'Robótica Industrial & Integração de Linhas',
    description: 'Integradora de células de solda e manipulação para o segmento automotivo e linha branca.',
    logoIcon: 'robot-arm',
    projects: [
      {
        id: 'proj-compatibilizacao-cad-nexus',
        serviceTypeId: 'compatibilizacao-cad',
        serviceTypeName: 'Conversão & Compatibilização CAD',
        title: 'Conversão e Padronização Multi-CAD para Integração de Célula',
        problem: 'Fornecedores enviando arquivos em formatos incompatíveis (Inventor, SolidWorks, CATIA, STEP) com perdas de referências de montagem.',
        technicalSolution: 'Higienização de geometrias importadas, correção de superfícies corrompidas e conversão padronizada para ambiente CAD corporativo unificado.',
        result: 'Integração de montagem sem erros de árvore, diminuindo em 75% o tempo de abertura e manipulação de montagens pesadas.',
        images: {
          before: {
            title: 'Antes: Conjunto Fragmentado com Geometrias Quebradas',
            description: 'Arquivos STEP com superfícies abertas, perda de vínculos e incompatibilidade de versões.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Arquivos Padronizados e Montagem Unificada',
            description: 'Sólidos íntegros, referências de posicionamento restabelecidas e estrutura de arquivos organizada.',
            tag: 'DEPOIS'
          }
        }
      }
    ]
  },
  {
    id: 'vortex-equipamentos',
    name: 'Vortex Soluções em Fluidos & Válvulas',
    shortName: 'Vortex Válvulas',
    segment: 'Óleo & Gás e Equipamentos de Fluxo',
    description: 'Desenvolvimento e fabricação de válvulas industriais de bloqueio e regulagem de alta pressão.',
    logoIcon: 'fluid-valve',
    projects: [
      {
        id: 'proj-renderizacao-3d-vortex',
        serviceTypeId: 'renderizacao-3d',
        serviceTypeName: 'Renderização Fotorrealista',
        title: 'Renderização Fotorrealista de Válvula Esfera Trunnion para Catálogo',
        problem: 'Necessidade de material técnico e comercial de alto impacto antes mesmo do primeiro protótipo ser usinado.',
        technicalSolution: 'Configuração de materiais fotorrealistas (aço forjado, vedações em PTFE, usinagem polida), iluminação de estúdio e renderização em altíssima resolução.',
        result: 'Apresentação comercial e catálogo técnico finalizados 4 semanas antes da produção física, viabilizando pré-vendas.',
        images: {
          before: {
            title: 'Antes: Visualização CAD Bruta em Wireframe',
            description: 'Modelo técnico em tons de cinza padrão de engenharia, inadequado para apresentação comercial ao cliente.',
            tag: 'ANTES'
          },
          after: {
            title: 'Depois: Renderização Fotorrealista com Detalhes de Acabamento',
            description: 'Texturas realistas de usinagem, reflexos de iluminação técnica e corte seccional visualmente impressionante.',
            tag: 'DEPOIS'
          }
        }
      }
    ]
  }
];
