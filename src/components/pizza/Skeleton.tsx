import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <circle cx="140" cy="130" r="125" />
    <rect x="0" y="269" rx="9" ry="9" width="280" height="30" />
    <rect x="-1" y="322" rx="15" ry="15" width="280" height="90" />
    <rect x="55" y="368" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="420" rx="12" ry="12" width="90" height="30" />
    <rect x="20" y="445" rx="0" ry="0" width="21" height="0" />
    <rect x="123" y="420" rx="19" ry="19" width="150" height="43" />
  </ContentLoader>
);

export default Skeleton;
