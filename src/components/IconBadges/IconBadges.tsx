import { IIconBadges } from './types';
import { SiReact, SiRedux } from 'react-icons/si';

const IconBadges: IIconBadges = (props) => {
  return props.iconName === 'SiReact' ? (
    <SiReact size="3em" color="#00CDF2" />
  ) : props.iconName === 'SiRedux' ? (
    <SiRedux size="3em" color="#00CDF2" />
  ) : null;
};

export default IconBadges;
