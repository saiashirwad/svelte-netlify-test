import Home from './Home.svelte'
import About from './About.svelte'

const routes = [
    {
        name: '/',
        component: Home,
    },
    {
        name: '/about',
        component: About
    }
]

export { routes };