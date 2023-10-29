import IconHome from 'assets/ico_home.svg';
import IconHomeFill from 'assets/ico_home_fill.svg';
import IconScrap from 'assets/ico_scrap.svg';
import IconScrapFill from 'assets/ico_scrap_fill.svg';
import { Link, useLocation } from 'react-router-dom';

const items = [
  {
    to: '/',
    label: '홈',
    icon: IconHome,
    iconFill: IconHomeFill,
  },
  {
    to: '/scrap',
    label: '스크랩',
    icon: IconScrap,
    iconFill: IconScrapFill,
  },
];

export default function Navigator() {
  const location = useLocation();

  const handleIsActive = (pathname: string) => {
    return pathname === '/' ? location.pathname === '/' : location.pathname === '/scrap';
  };

  return (
    <div className="flex bg-black fixed bottom-0 max-w-[560px] w-full h-[8.5rem] rounded-[3rem] text-white">
      {items.map((item) => (
        <NaviItem key={item.to} {...item} isActive={handleIsActive(item.to)} />
      ))}
    </div>
  );
}

type Props = {
  to: string;
  label: string;
  icon: string;
  iconFill: string;
  isActive?: boolean;
};

function NaviItem({ to, label, icon, iconFill, isActive }: Props) {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Link to={to}>
        <div className="w-[2.4rem] aspect-square">
          <img src={isActive ? iconFill : icon} />
        </div>
        <div
          className={`text-[1rem] font-semibold text-center mt-[0.8rem] text-[${
            isActive ? '#fff' : '#6D6D6D'
          }]`}
        >
          {label}
        </div>
      </Link>
    </div>
  );
}
