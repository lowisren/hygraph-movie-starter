"use client";
//Mux player component
import React from "react";
import MuxPlayer from "@mux/mux-player-react";
interface MuxPlayerProps {
  playbackId: string;
}

const MuxPlayerComponent: React.FC<MuxPlayerProps> = ({ playbackId }) => {
  return <MuxPlayer playbackId={playbackId} accent-color="#5b4cff" />;
};

export default MuxPlayerComponent;
