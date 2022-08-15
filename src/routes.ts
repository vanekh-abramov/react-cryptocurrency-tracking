import React from 'react'
import { HOME_ROUTE } from './constants/routerLinks';
import HomePage from './pages/home/HomePage';

interface IPublicRoutes {
  path: string,
  Component: React.FC
}

export const publicRoutes: IPublicRoutes[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage
  }
]