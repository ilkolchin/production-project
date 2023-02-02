import { Notification } from '../model/types/notification';
import { rtkApi } from '@/shared/api/rtkApi';

const notoficationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  })
});

export const useNotifications = notoficationApi.useGetNotificationsQuery;
