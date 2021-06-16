import React from 'react';
import ContentLoader from 'react-content-loader';

interface Props {}

const Skeleton: React.FC<Props> = () => {
  const BasicPane = (
    <td>
      <ContentLoader
        speed={50}
        height={60}
        viewBox="0 0 50 60"
        backgroundColor="#f3f3f3"
        foregroundColor="#ababab"
      >
        <rect x="0" y="10" rx="3" ry="3" width="50" height="8" />
        <rect x="0" y="30" rx="3" ry="3" width="50" height="8" />
        <rect x="0" y="50" rx="3" ry="3" width="50" height="8" />
      </ContentLoader>
    </td>
  );

  return (
    <tr>
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
      {BasicPane}
    </tr>
  );
};

export default Skeleton;