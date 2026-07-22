// Catálogo do portfólio. Troque nomes, descrições e valores pelos seus
// produtos reais — `layers` controla a silhueta desenhada no card.

export const CATEGORIES = ['Todos', 'Decoração', 'Utilidades', 'Presentes', 'Geek']

export const PRODUCTS = [
  {
    id: 'vaso-organico',
    name: 'Vaso Orgânico',
    cat: 'Decoração',
    desc: 'Vaso escultural em camadas visíveis, impresso em PLA fosco. Disponível em três tamanhos e mais de vinte cores.',
    price: 'R$ 49',
    color: '#D89A5B',
    glow: 'rgba(216, 154, 91, 0.14)',
    layers: [0.38, 0.5, 0.62, 0.7, 0.72, 0.7, 0.65, 0.58, 0.5, 0.42, 0.36, 0.31, 0.3, 0.33, 0.42],
  },
  {
    id: 'luminaria-lua',
    name: 'Luminária Lua',
    cat: 'Decoração',
    desc: 'Esfera translúcida com relevo lunar e luz quente embutida. Um ponto de calma para qualquer ambiente.',
    price: 'R$ 129',
    color: '#E6DAC4',
    glow: 'rgba(230, 218, 196, 0.12)',
    layers: [0.42, 0.24, 0.4, 0.6, 0.73, 0.82, 0.88, 0.91, 0.91, 0.88, 0.82, 0.72, 0.58, 0.38],
  },
  {
    id: 'suporte-fone',
    name: 'Suporte de Headset',
    cat: 'Utilidades',
    desc: 'Base pesada e haste esguia para manter seu setup organizado. Impresso em PETG, resistente ao uso diário.',
    price: 'R$ 69',
    color: '#9FB08C',
    glow: 'rgba(159, 176, 140, 0.13)',
    layers: [0.92, 0.88, 0.34, 0.28, 0.26, 0.25, 0.24, 0.23, 0.22, 0.22, 0.26, 0.4, 0.52, 0.56],
  },
  {
    id: 'miniatura',
    name: 'Miniatura Personalizada',
    cat: 'Geek',
    desc: 'Personagens, bustos e peças de RPG modelados sob encomenda, com pintura opcional feita à mão.',
    price: 'R$ 89',
    color: '#8FA6B8',
    glow: 'rgba(143, 166, 184, 0.13)',
    layers: [0.68, 0.7, 0.48, 0.4, 0.36, 0.34, 0.33, 0.33, 0.34, 0.36, 0.4, 0.52, 0.62, 0.6, 0.64],
  },
  {
    id: 'organizador',
    name: 'Organizador de Mesa',
    cat: 'Utilidades',
    desc: 'Módulos empilháveis para canetas, cabos e pequenos objetos. Combine cores e monte do seu jeito.',
    price: 'R$ 55',
    color: '#C4785A',
    glow: 'rgba(196, 120, 90, 0.13)',
    layers: [0.96, 0.96, 0.94, 0.72, 0.72, 0.7, 0.5, 0.5, 0.48, 0.28, 0.28],
  },
  {
    id: 'chaveiro-nome',
    name: 'Chaveiros & Tags',
    cat: 'Presentes',
    desc: 'Nomes, logos e datas em peças pequenas com grande acabamento. Perfeitos como lembrança ou brinde.',
    price: 'R$ 15',
    color: '#B08CA6',
    glow: 'rgba(176, 140, 166, 0.13)',
    layers: [0.18, 0.34, 0.55, 0.72, 0.82, 0.86, 0.87, 0.86, 0.84, 0.8, 0.74, 0.62, 0.44],
  },
]

// Silhueta maior usada no hero — uma ânfora que "se imprime" ao carregar.
export const HERO_LAYERS = [
  0.4, 0.46, 0.54, 0.62, 0.68, 0.72, 0.74, 0.74, 0.72, 0.68, 0.63, 0.57, 0.5,
  0.44, 0.39, 0.35, 0.32, 0.3, 0.29, 0.3, 0.34, 0.44, 0.5,
]
