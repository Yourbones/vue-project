const Home = () => import('@views/Home')
const About = () => import('@views/About')
const CSS = () => import('@views/CSS')
const CalcSource = () => import('@views/calcSource')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/css',
    name: 'CSS',
    component: CSS
  },
  {
    path: '/calcSource',
    name: 'CalcSource',
    component: CalcSource
  }
]
