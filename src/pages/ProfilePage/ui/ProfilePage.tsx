import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
