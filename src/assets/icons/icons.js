import { SvgIcon } from '@mui/material';

import { ReactComponent as dress}  from './dress.svg';
import { ReactComponent as  email } from './email.svg';
import { ReactComponent as  home } from './home.svg';
import { ReactComponent as  order } from './order.svg';

const dressIcon = <SvgIcon component={dress} inheritViewBox />
const emailIcon = <SvgIcon component={email} inheritViewBox />
const homeIcon = <SvgIcon component={home} inheritViewBox />
const orderIcon = <SvgIcon component={order} inheritViewBox />

export {
  dressIcon,
  emailIcon,
  homeIcon,
  orderIcon
}