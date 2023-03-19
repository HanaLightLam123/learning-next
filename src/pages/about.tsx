import { useRouter } from 'next/router';
import * as React from 'react';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {

  const router = useRouter();

  console.log('about query: ', router.query)

  return (
    <div>
      <p>About Page </p>
    </div>
  );
}
