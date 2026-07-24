// Tudo que aparece no hub é editado aqui: perfil, contatos e links.

export const PROFILE = {
  name: 'Zaché 3D',
  tagline: 'Impressão 3D personalizada',
  bio: 'Decoração, presentes e projetos sob medida — cada peça nasce camada por camada, com a sua cara.',
}

// Coloque seu número com DDI + DDD, apenas dígitos (ex.: 5527999999999)
export const WHATSAPP_NUMBER = '5500000000000'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo seu hub de links e quero um orçamento.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const INSTAGRAM_USER = 'seu.perfil'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_USER}`

export const EMAIL = 'yurizache@gmail.com'

// Grupos de links. `highlight: true` deixa o cartão em destaque (cobre).
// Troque os endereços de loja pelos seus — ou remova os que não usar.
export const LINK_GROUPS = [
  {
    title: 'Fale comigo',
    links: [
      {
        icon: 'whatsapp',
        label: 'Pedir orçamento no WhatsApp',
        desc: 'Resposta rápida, sem compromisso',
        href: WHATSAPP_URL,
        highlight: true,
      },
      {
        icon: 'instagram',
        label: 'Instagram',
        desc: `@${INSTAGRAM_USER} — bastidores e novidades`,
        href: INSTAGRAM_URL,
      },
      {
        icon: 'mail',
        label: 'E-mail',
        desc: EMAIL,
        href: `mailto:${EMAIL}?subject=${encodeURIComponent('Orçamento de impressão 3D')}`,
      },
    ],
  },
  {
    title: 'Onde comprar',
    links: [
      {
        icon: 'store',
        label: 'Loja na Shopee',
        desc: 'Peças prontas com envio para todo o Brasil',
        href: 'https://shopee.com.br/',
      },
      {
        icon: 'gift',
        label: 'Loja no Elo7',
        desc: 'Presentes e peças personalizadas',
        href: 'https://elo7.com.br/',
      },
    ],
  },
]
