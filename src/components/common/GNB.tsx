import { Link, useLocation } from 'react-router-dom'

const INDEX_PAGE = '/coins'

const GNB_MENU: {
  path: string
  content: string
}[] = [
  {
    path: '/coins',
    content: '가상자산 시세 목록',
  },
  {
    path: '/bookmark',
    content: '북마크 목록',
  },
]

const MENU_STYLE = {
  default: 'border text-lg md:text-xl font-bold flex items-center justify-center',
  selected: 'text-zinc-900 bg-white',
  unselected: 'text-zinc-500',
}

const GNB = () => {
  const location = useLocation()

  const menuStyle = (menuPath: string) =>
    location.pathname === menuPath || (menuPath === INDEX_PAGE && location.pathname === '/')
      ? MENU_STYLE.selected
      : MENU_STYLE.unselected

  return (
    <header className="grid grid-cols-2 h-16 bg-stone-200/50">
      {GNB_MENU.map((menu) => (
        <Link key={menu.path} to={menu.path} className={`${MENU_STYLE.default} ${menuStyle(menu.path)}`}>
          <span>{menu.content}</span>
        </Link>
      ))}
    </header>
  )
}

export default GNB
