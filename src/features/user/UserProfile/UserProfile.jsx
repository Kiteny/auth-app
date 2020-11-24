import React from 'react';
import { useDispatch } from 'react-redux';

import userApi from '../../../api/userApi';
import { userActions } from '../_userSlice_';
import Item from './components/Item';
import { Container, Header, StyledLink, Table, TopBar } from './StyledComponents';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onClick = async () => {
    // console.log(await userApi.fetchUserProfile());
    dispatch(userActions.logout());
  }

  return (
    <Container>
      <Header>Профиль</Header>
      <TopBar>
        <StyledLink href="#" onClick={onClick}>Выйти из аккаунта</StyledLink>
      </TopBar>
      <Table>
        <Item name="Имя" value="Артём"/>
        <Item name="Фамилия" value="Кривошеев"/>
        <Item name="Телефон" value="+791977777777"/>
        <Item name="Почта" value="kiteny@gmail.com"/>
      </Table>
    </Container>
  );
}

export default UserProfile;
