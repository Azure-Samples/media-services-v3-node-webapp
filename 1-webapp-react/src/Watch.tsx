import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DefaultPalette, Stack, DefaultButton, IStackTokens, IStackStyles } from '@fluentui/react';
import { Header } from "./Header";
import ShakaPlayer from './ShakaPlayer';

const stackTokens: IStackTokens = { childrenGap: 5 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    background: DefaultPalette.themeLighter,
    width: '100%',
    height: '100vh',
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
    <Stack styles={stackStyles} tokens={stackTokens}>
      <Stack className="App" horizontalAlign='center' verticalAlign='center' >
        <Header />
          {video.length === 1 && <Stack className="video" horizontalAlign="center" key={video[0].id}>
            <h2>{video[0].title}</h2>
            <ShakaPlayer src={video[0].locator} />
          </Stack>}
      </Stack>
        <Link className="btn" to="/">
          <DefaultButton text="home" />
        </Link>
    </Stack>
  )
}