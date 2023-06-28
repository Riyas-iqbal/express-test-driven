import { Router } from 'express'
import authRoute from './auth.route'
import testRoute from './test.route'

const router = Router()

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/test',
        route: testRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router