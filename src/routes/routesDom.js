import { Trans } from 'react-i18next';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../components/App/App';
import { dressIcon, emailIcon, homeIcon, orderIcon } from '../assets/icons/icons';
import LanguageIcon from '@mui/icons-material/Language';
import LanguagesOption from '../components/menuComponents/LanguagesOption/LanguagesOption';
import { Translation } from 'react-i18next';
import HomePage from '../components/pages/HomePage/HomePage';

// get route info by path
const routeByPath = path => routesDom.routes.find(element => element.path === path);

// create translation component to render on label
const transtaleComp = (translate) => <Translation>{ (t) => t(translate) }</Translation>

const rootPath = 'app';
const homePath = 'home';

const routesDom = createBrowserRouter([
  {
    path: rootPath,
    element: <App />,
    label: transtaleComp('menuList.home'),
    icon: homeIcon,
    navigateButton: true,
    useDefaultActionOnClick: true,
    children: [
      {
        path: homePath,
        element: <HomePage />,
        label: transtaleComp('menuList.home'),
        icon: homeIcon,
        navigateButton: true,
        useDefaultActionOnClick: true,
      },
      {
        path: 'collections',
        element: <div>collections!</div>,
        label: transtaleComp('menuList.collections'),
        icon: dressIcon,
        navigateButton: true,
        useDefaultActionOnClick: true,
        children: [
          {
            path: 'collection-one',
            element: <div>collection-one!</div>,
            label: <Trans>menuList.collections</Trans>,
            icon: null,
            navigateButton: true,
            useDefaultActionOnClick: false,
          },
        ]
      },
      {
        path: "appointment",
        element: <div>appointment!</div>,
        label: transtaleComp('menuList.appointment'),
        icon: orderIcon,
        navigateButton: true,
        useDefaultActionOnClick: true,
      },
      {
        path: "contact-us",
        element: <div>contact-us!</div>,
        label: transtaleComp('menuList.contact-us'),
        icon: emailIcon,
        navigateButton: true,
        useDefaultActionOnClick: true,
      },
      {
        path:'languages',
        element: <></>,
        label: transtaleComp('lang'),
        icon: <LanguageIcon />,
        navigateButton: false,
        useDefaultActionOnClick: false,
        popOver: {
          method: 'hover',
          component: <LanguagesOption />
        },
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={`/${rootPath}/${homePath}`} replace={true} />
  },
]);

export {
  routesDom,
  rootPath,
  homePath,
  routeByPath,
};