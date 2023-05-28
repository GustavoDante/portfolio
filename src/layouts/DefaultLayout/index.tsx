import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { NavBar } from '../../pages/Home/components/NavBar'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavBar />
      <Outlet />
    </LayoutContainer>
  )
}
