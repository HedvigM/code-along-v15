import React from 'react';
import styled from 'styled-components/macro';
import { Card } from 'lib/card';

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <>
      <ThinnerCard
        coverImage="https://picsum.photos/500/300"
        thumbnailUrl="https://picsum.photos/100/100"
        title="This is the Title"
        secondaryText="Secondary Title"
      />
      <Card title="Title" secondaryText="Secondary text" />
    </>
  );
};
