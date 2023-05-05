import { Fragment } from 'react';
import MainNavigation from './components/navbar';

interface IProps {
    children: JSX.Element
}

function Layout(props:IProps) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;