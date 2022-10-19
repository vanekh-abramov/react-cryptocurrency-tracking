import React from 'react'
import { HOME_ROUTE, BASKET_ROUTE } from './constants/routerLinks';
import HomePage from './pages/home/HomePage';
import BasketPage from './pages/basket/BasketPage'

interface IPublicRoutes {
  path: string,
  Component: React.FC
}

export const publicRoutes: IPublicRoutes[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage
  },
  {
    path: BASKET_ROUTE,
    Component: BasketPage
  }
]