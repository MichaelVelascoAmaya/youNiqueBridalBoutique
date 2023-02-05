import { Trans } from 'react-i18next';
import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App/App';
import { dressIcon, emailIcon, homeIcon, orderIcon } from '../assets/icons/icons';


const rootPath = '/';

const routesDom = createBrowserRouter([
  {
    path: rootPath,
    element: <App />,
    label: <Trans>menuList.home</Trans>,
    icon: homeIcon,
    children: [
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
]);

// get route info by path
const routeByPath = path => routesDom.routes.find(element => element.path === path);

export {
  routesDom,
  rootPath,
  routeByPath,
};