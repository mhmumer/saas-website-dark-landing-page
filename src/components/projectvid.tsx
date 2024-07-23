import React from 'react'
import BackgroundVideo from 'next-video/background-video'

export default function Present() {
  return (
    <main className=" p-8 bg-black">
      <div className="rounded-xl overflow-hidden  bg-black">
        <BackgroundVideo src="video/present.mp4" />
      </div>
    </main>
  );
}
