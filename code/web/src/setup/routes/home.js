// App Imports
import Home from '../../modules/pages/Home'
import Men from '../../modules/pages/Men'
import Women from '../../modules/pages/Women'
import HowItWorks from '../../modules/pages/HowItWorks'
import WhatsNew from '../../modules/pages/WhatsNew'
import Children from '../../modules/pages/Children';

// Home routes
export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  },

  men: {
    path: '/men',
    component: Men
  },

  women: {
    path: '/women',
    component: Women
  },

  children: {
    path: '/children',
    component: Children
  },

  howItWorks: {
    path: '/how-it-works',
    component: HowItWorks
  },

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
}
