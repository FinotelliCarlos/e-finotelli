import school from '../assets/icons/school.svg'
import systemCompany from '../assets/icons/system-company.svg'
import ecommerce from '../assets/icons/e-commerce.svg'
import dashboard from '../assets/icons/dashboard.svg'
import singlePage from '../assets/icons/single-page.svg'

import Happy from '../assets/projects/happy.png'
import Proffy from '../assets/projects/proffy.png'
import Finaceapp from '../assets/projects/financeapp.png'
import Meupao from '../assets/projects/meupao.png'

import Web from '../assets/services/web.png'
import BackEnd from '../assets/services/backend.png'
import Mobile from '../assets/services/mobile.png'

export const api = {
  products: [
    {
      image: school,
      description: 'Plataforma estudantil.'
    },
    {
      image: systemCompany,
      description: 'Software para empresas.'
    },
    {
      image: ecommerce,
      description: 'Aplicações para negocios.'
    },
    {
      image: dashboard,
      description: 'Dashboards de gerenciamento.'
    },
    {
      image: singlePage,
      description: 'Landpages sobre oque desejar.'
    }
  ],
  projects: [
    {
      image: Happy,
      title: 'Happy',
      description: 'Uma aplicação que te aproxima de crianças carentes!',
      link: 'https://plathappy.herokuapp.com/'
    },
    {
      image: Proffy,
      title: 'Proffy',
      description:
        'Plataforma de estudos com a interação entre aluno e professor.',
      link: 'https://appproffy.herokuapp.com/'
    },
    {
      image: Finaceapp,
      title: 'Finance App',
      description: 'Plataforma para controle e organização financeira pessoal.',
      link: 'https://finotellicarlos.github.io/financeapp/'
    },
    {
      image: Meupao,
      title: 'Meu Pão',
      description:
        'Esta landpage trás uma referencia a uma vitrine de padaria.',
      link: 'https://meupaoreact.herokuapp.com/'
    }
  ],
  services: [
    {
      title: 'Front-end',
      image: Web,
      description: 'Voltada à construção de web-sites e softwares.'
    },
    {
      title: 'Back-end',
      image: BackEnd,
      description: 'É capaz de cuidar das engrenagens daquela aplicação.'
    },
    {
      title: 'Mobile',
      image: Mobile,
      description: 'Trata-se de aplicações para dispositivos moveis.'
    }
  ]
}
