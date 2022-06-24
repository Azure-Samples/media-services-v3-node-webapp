import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, Text, DefaultButton, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import { Header } from "./Header";
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
  IDocumentCardStyles,
} from '@fluentui/react/lib/DocumentCard';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { ImageFit } from '@fluentui/react/lib/Image';

const stackTokens: IStackTokens = { childrenGap: 5 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: 'auto',
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
  videos: videoData[]
}

interface videoData {
  id: number;
  title: string;
  locator: string;
  thumbnail: string;
}

export const Browse = (props: BrowseProps) => {
  const cardStyles: IDocumentCardStyles = {
    root: { display: 'inline-block', marginRight: 10, marginBottom: 10, width: 350 },
  };

  let navigate = useNavigate();

  return (
    <Stack className="App" horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      <Header />
      <h1> Videos: </h1>
      <Stack className="imgs" horizontal horizontalAlign="center"  styles={videoCardStack} tokens={stackTokens}>
        {props.videos.map(video => {
          return (<div key={video.id} className="thumbnails">
            <DocumentCard
              className="card"
              styles={cardStyles}
              onClick={() => { navigate(`watch/${video.id}`)}}
            >
              <DocumentCardImage height={200} imageFit={ImageFit.cover} imageSrc={video.thumbnail} />
              <DocumentCardDetails>
                <DocumentCardTitle title={video.title} shouldTruncate />
              </DocumentCardDetails>
            </DocumentCard>
          </div>
          )
        })}
      </Stack>
    </Stack>
  )
}