const {userRoutes} = require('./userroutes')
const {consumerRoutes} = require('./consumerroutes')


export const Routes = [
    ...userRoutes,
    ...consumerRoutes
]