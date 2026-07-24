// Tudo que aparece no hub é editado aqui: perfil, contatos e links.

export const PROFILE = {
  name: 'Yuri Zaché',
  initials: 'YZ',
  role: 'Psicólogo Clínico',
  crp: 'CRP 16/11434',
  bio: 'Psicoterapia para quem quer se entender melhor e viver com mais leveza. Atendimento online para todo o Brasil.',
}

// Número com DDI + DDD, apenas dígitos
export const WHATSAPP_NUMBER = '5527995323301'
export const WHATSAPP_MESSAGE = 'Olá, Yuri! Vim pelo seu hub de links e gostaria de saber mais sobre as sessões.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const INSTAGRAM_USER = 'psi.yurizache'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_USER}`

// Troque pelo endereço real do seu site quando ele estiver no ar.
export const SITE_URL = 'https://www.seusite.com.br'

export const EMAIL = 'yurizache@gmail.com'

// Grupos de links. `highlight: true` deixa o cartão em destaque.
// Para adicionar uma rede nova, copie um bloco e ajuste ícone, texto e link.
// Ícones disponíveis: whatsapp, instagram, mail, site, youtube, spotify,
// tiktok, calendar, article.
export const LINK_GROUPS = [
  {
    title: 'Vamos conversar',
    links: [
      {
        icon: 'whatsapp',
        label: 'Agendar uma conversa',
        desc: 'Tire suas dúvidas sobre as sessões pelo WhatsApp',
        href: WHATSAPP_URL,
        highlight: true,
      },
      {
        icon: 'site',
        label: 'Meu site',
        desc: 'Sobre mim, abordagem e como funciona a terapia',
        href: SITE_URL,
      },
      {
        icon: 'mail',
        label: 'E-mail',
        desc: EMAIL,
        href: `mailto:${EMAIL}?subject=${encodeURIComponent('Contato — psicoterapia')}`,
      },
    ],
  },
  {
    title: 'Me acompanhe',
    links: [
      {
        icon: 'instagram',
        label: 'Instagram',
        desc: `@${INSTAGRAM_USER} — conteúdo sobre saúde mental`,
        href: INSTAGRAM_URL,
      },
      // Exemplos prontos — descomente e ajuste quando criar os perfis:
      // {
      //   icon: 'youtube',
      //   label: 'YouTube',
      //   desc: 'Vídeos sobre psicologia no dia a dia',
      //   href: 'https://youtube.com/@seucanal',
      // },
      // {
      //   icon: 'tiktok',
      //   label: 'TikTok',
      //   desc: '@seuperfil',
      //   href: 'https://tiktok.com/@seuperfil',
      // },
    ],
  },
]
