import {
    createRouter,
    createWebHistory
} from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegistration from './pages/coaches/CoachRegistration';

import ContactCoach from './pages/resuests/ContactCoach';
import RequestReceived from './pages/resuests/RequestReceived';
import UserAuth from './pages/auth/UserAuth';
import NotFound from './pages/NotFound';

import store from './store/';



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