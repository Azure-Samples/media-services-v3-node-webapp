import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultPalette, Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import { Header } from "./Header";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
} from '@fluentui/react/lib/DocumentCard';
import { ImageFit } from '@fluentui/react/lib/Image';
import VideoData from "./iVideoData";


const stackTokens: IStackTokens = { childrenGap: 5 };

const stackStyles: Partial<IStackStyles> = {
  root: {
    background: DefaultPalette.themeLighter,
    width: 'auto',
    height: '100%',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const videoCardStack: Partial<IStackStyles> = {
  root: {
    width: '100%',
    margin: '0 auto',
  },
};

interface BrowseProps {
  videos: VideoData[]
}

export const Browse = (props: BrowseProps) => {
  const cardStyles: IDocumentCardStyles = {
    root: { display: 'inline-block', marginBottom: 10, width: 350 },
  };

  let navigate = useNavigate();

  return (
    <Stack className="App" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      <Header />
      <h1> Videos: </h1>
      <Stack className="imgs" wrap horizontal horizontalAlign='center' styles={videoCardStack} >
        {props.videos.map(video => {
          return (
            <DocumentCard
              key={video.id}
              className="thumbnails"
              styles={cardStyles}
              onClick={() => { navigate(`watch/${video.id}`)}}
            >
              <DocumentCardImage height={200} imageFit={ImageFit.cover} imageSrc={video.thumbnail} />
              <DocumentCardDetails>
                <DocumentCardTitle title={video.title} shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>
          )
        })}
      </Stack>
    </Stack>
  )
}