import {
    createRouter,
    createWebHistory
} from 'vue-router';

import CoachesList from './pages/coaches/CoachesList';
import NotFound from './pages/NotFound';

import store from './store/';

const CoachDetail = () => import('./pages/coaches/CoachDetail')
const CoachRegistration = () => import('./pages/coaches/CoachRegistration')
const ContactCoach = () => import('./pages/resuests/ContactCoach')
const RequestReceived = () => import('./pages/resuests/RequestReceived')
const UserAuth = () => import('./pages/auth/UserAuth')

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: CoachesList
        },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [{
                path: 'contact',
                component: ContactCoach
            }]
        },
        {
            path: '/register',
            component: CoachRegistration,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/requests',
            component: RequestReceived,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/auth',
            component: UserAuth,
            meta: {
                requiresUnauth: true
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        },
    ]
})

router.beforeEach(function (to, from, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
})

export default router;