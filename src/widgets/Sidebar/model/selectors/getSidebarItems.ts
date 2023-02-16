import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import BookIcon from '@/shared/assets/icons/book.svg';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'Main Page',
      Icon: HomeIcon
    },
    {
      path: RoutePath.about,
      text: 'About',
      Icon: AboutIcon
    }
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: BookIcon,
        authOnly: true
      }
    );
  }

  return sidebarItemsList;
});
