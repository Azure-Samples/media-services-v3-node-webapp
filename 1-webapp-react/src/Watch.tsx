import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Stack, Text, DefaultButton, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import { Header } from "./Header";
import ShakaPlayer from './ShakaPlayer';


const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };

const stackTokens: IStackTokens = { childrenGap: 5 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: 'auto',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

interface WatchProps {
  videos: videoData[]
}

interface videoData {
  id: number;
  title: string;
  locator: string;
  thumbnail: string;
}
export const Watch = (props: WatchProps) => {
  const { vidId } = useParams();
  let video = props.videos.filter(video => video.id.toString() === vidId)
  return (
    <Stack className="App" horizontalAlign='center' verticalAlign='center' styles={stackStyles} tokens={stackTokens}>
      <Header />
      <Stack id="imgs" horizontal horizontalAlign="center">
        {video.length === 1 && <div key={video[0].id} className="player">
            <h2>{video[0].title}</h2>
            <ShakaPlayer src={video[0].locator} />
          </div>}
      </Stack>
      <Link to="/">
        <DefaultButton text="home" />
      </Link>
    </Stack>
  )
}