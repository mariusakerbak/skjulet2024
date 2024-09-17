"use client"
import dynamic from 'next/dynamic';

const MapController = dynamic(() => import('@/components/MapController'),
      {
        loading: () => <p>Kartet laster...</p>,
        ssr: false
      }
  )

  export {MapController}