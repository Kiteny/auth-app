import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../_userSlice_';
import Item from './components/Item';
import { Container, Header, StyledLink, Table, TopBar } from './StyledComponents';
import Loader from '../../../ui/Loader'

const UserProfile = () => {
  const status = useSelector(userSelectors.status);
  const userData = useSelector(userSelectors.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.fetchProfile());
  }, []);

  const onClick = async (e) => {
    e.preventDefault();
    dispatch(userActions.logout());
  }

  return (
    <Container>
      <Header>Профиль</Header>
      <TopBar>
        <StyledLink href="#" onClick={onClick}>Выйти из аккаунта</StyledLink>
      </TopBar>
      {
        status !== 'loading'
          ?
            <Table>
              <Item name="Имя" value="Артём"/>
              <Item name="Фамилия" value="Кривошеев"/>
              <Item name="Телефон" value="+791977777777"/>
              <Item name="Почта" value="kiteny@gmail.com"/>
            </Table>
          :
            <Loader />
      }
    </Container>
  );
}

export default UserProfile;
