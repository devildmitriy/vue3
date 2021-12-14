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
            component: CoachRegistration
        },
        {
            path: '/requests',
            component: RequestReceived
        },
        {
            path: '/auth',
            component: UserAuth
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        },
    ]
})

export default router;