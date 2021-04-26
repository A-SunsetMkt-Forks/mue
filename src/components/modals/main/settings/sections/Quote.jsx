import React from 'react';

import Checkbox from '../Checkbox';
import Text from '../Text';
import Switch from '../Switch';

export default function QuoteSettings() {
  const { quote } = window.language.modals.main.settings.sections;

  return (
    <>
      <h2>{quote.title}</h2>
      <Switch name='quote' text={window.language.modals.main.settings.enabled} category='quote' element='.quotediv' />
      <Checkbox name='authorLink' text={quote.author_link} element='.other' />
      <Text title={quote.custom} name='customQuote' element='.other' />
      <Text title={quote.custom_author} name='customQuoteAuthor' element='.other'/>

      <h3>{quote.buttons.title}</h3>
      <Checkbox name='copyButton' text={quote.buttons.copy} category='quote'/>
      <Checkbox name='tweetButton' text={quote.buttons.tweet} category='quote'/>
      <Checkbox name='favouriteQuoteEnabled' text={quote.buttons.favourite} category='quote'/>
    </>
  );
}