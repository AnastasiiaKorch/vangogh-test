import {BASKET_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from './pages/Shop'
import Basket from "./pages/Basket";
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]