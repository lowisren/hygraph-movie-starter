"use client";
import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { MuxPlayerProps } from '@/types/types';

const MuxPlayerComponent: React.FC<MuxPlayerProps> = ({ playbackId }) => {
  return (
    <MuxPlayer 
      playbackId={playbackId}
      accent-color="#5b4cff" 
    />
  );
};

export default MuxPlayerComponent;