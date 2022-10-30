import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="147" r="125" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="28" />
    <rect x="0" y="338" rx="10" ry="10" width="280" height="88" />
    <rect x="-1" y="447" rx="10" ry="10" width="95" height="30" />
    <rect x="129" y="438" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
