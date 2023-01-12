import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/paths';
import { SidebarItemType } from '../types/sidebar';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import BookIcon from 'shared/assets/icons/book.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'Главная',
      Icon: HomeIcon
    },
    {
      path: RoutePath.about,
      text: 'О сайте',
      Icon: AboutIcon
    }
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: BookIcon,
        authOnly: true
      }
    );
  }

  return sidebarItemsList;
});
