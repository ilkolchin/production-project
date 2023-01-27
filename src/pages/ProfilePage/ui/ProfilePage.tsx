import { EditableProfileCard } from 'features/EditableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorReload } from 'widgets/ErrorReload';
import { Page } from 'widgets/Page';

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <ErrorReload />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
});

export default ProfilePage;
