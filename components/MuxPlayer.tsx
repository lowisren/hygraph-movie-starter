"use client";
import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

interface MuxPlayerProps {
  playbackId: string;
}

const MuxPlayerComponent: React.FC<MuxPlayerProps> = ({ playbackId }) => {
  return <MuxPlayer playbackId={playbackId} />;
};

export default MuxPlayerComponent;