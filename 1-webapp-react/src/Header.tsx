import React from 'react';
import { Stack, DefaultButton, IStackStyles, DefaultPalette } from '@fluentui/react';


const nonShrinkingStackItemStylesLeft: IStackStyles = {
  root: {
    color: DefaultPalette.white,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

const nonShrinkingStackItemStylesRight: IStackStyles = {
  root: {
    color: DefaultPalette.white,
    height: 50,
    overflow: 'hidden',
  },
};

export const Header = () => {
  return (
    <header className="App-header">
        <Stack disableShrink styles={nonShrinkingStackItemStylesLeft} >
          <img  src='/contoso.png' alt='Contoso logo' />
        </Stack>
        <Stack horizontal reversed grow disableShrink styles={nonShrinkingStackItemStylesRight}>
          <DefaultButton style={{float:"right"}} text="Login" />
        </Stack>
    </header>
  )
}