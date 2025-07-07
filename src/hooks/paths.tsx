import { Create, Home, More } from "../pages"


export const paths = {
    home: "/",
    more: "/more/:id",
    create: "/create",
    update: "/update/:id"
}


export const routesList = [
    {
        id: 1,
        path: paths.home,
        element: <Home />
    },
    {
        id: 2,
        path: paths.more,
        element: <More />
    },
    {
        id: 3,
        path: paths.create,
        element: <Create />
    },
    {
        id: 4,
        path: paths.update,
        element: <Create />
    },
]