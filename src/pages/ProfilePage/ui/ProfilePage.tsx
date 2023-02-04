import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="16" align="stretch">
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
});

export default ProfilePage;
