import { Trans } from 'react-i18next';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../components/App/App';
import { dressIcon, emailIcon, homeIcon, orderIcon } from '../assets/icons/icons';


const rootPath = 'app';
const homePath = 'home';

const routesDom = createBrowserRouter([
  {
    path: rootPath,
    element: <App />,
    label: <Trans>menuList.home</Trans>,
    icon: homeIcon,
    children: [
      {
        path: homePath,
        element: <div>home!</div>,
        label: <Trans>menuList.home</Trans>,
        icon: homeIcon,
      },
      {
        path: 'collections',
        element: <div>collections!</div>,
        label: <Trans>menuList.collections</Trans>,
        icon: dressIcon,
        children: [
          {
            path: 'collection-one',
            element: <div>collection-one!</div>,
            label: <Trans>menuList.collections</Trans>,
            icon: null,
          },
        ]
      },
      {
        path: "appointment",
        element: <div>appointment!</div>,
        label: <Trans>menuList.appointment</Trans>,
        icon: orderIcon,
      },
      {
        path: "contact-us",
        element: <div>contact-us!</div>,
        label: <Trans>menuList.contact-us</Trans>,
        icon: emailIcon,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={`/${rootPath}`} replace={true} />
  },
]);

// get route info by path
const routeByPath = path => routesDom.routes.find(element => element.path === path);

export {
  routesDom,
  rootPath,
  homePath,
  routeByPath,
};