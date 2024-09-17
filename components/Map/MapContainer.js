import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'),
      {
        loading: () => <p>Kartet laster...</p>,
        ssr: false
      }
  )

  export {Map}