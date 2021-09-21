import {
    createRouter,
    createWebHistory
} from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/teams'
        },
        {
            path: '/teams',
            name: 'teams',
            // alias: '/',
            meta: {needsAuth: true},
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [{
                path: '/teams/:teamId',
                name: 'team-members',
                component: TeamMembers,
                props: true
            }, ]
        }, // our-domain.com/teams => TeamsList
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from ,next) {
                console.log('users beforeEnter');
                console.log(to,from);
                next();

            }
        },

        {
            path: '/:notFound(.*)',
            component: NotFound

        }

    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            top: 0,
            left: 0
        }
    }
});

router.beforeEach((to, from, next) => {
    console.log('global beforeEach')
    console.log(to, from)
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name:'team-member', params:{teamId: 't2'}});
    // }
    if(to.meta.needsAuth){
        console.log('need Auth')
    }
    next();
});

router.afterEach((to,from ) => {
    //sending analystick data
    console.log('Global afterEach',to,from )
})

export default router;