import * as React from 'react';

import addons from '@storybook/addons';

import { DesignTokenPanel } from './components/Panel';
import { HardCodedValues } from './interfaces/hard-coded-values.interface';
import { TokenGroup } from './interfaces/token-group.interface';
import { CssParser } from './parsers/css.parser';
import { ScssParser } from './parsers/scss.parser';
import { SvgIconParser } from './parsers/svg-icon.parser';
import { ADDON_ID, PANEL_ID, PANEL_TITLE } from './shared';

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();

  let parsedCss: {
    hardCodedValues?: HardCodedValues[];
    keyframes: string;
    tokenGroups: TokenGroup[];
  };
  let parsedScss: {
    hardCodedValues?: HardCodedValues[];
    keyframes: string;
    tokenGroups: TokenGroup[];
  };
  let parsedSvgIcons: {
    hardCodedValues?: HardCodedValues[];
    keyframes: string;
    tokenGroups: TokenGroup[];
  };
  let parsed: any;

  addons.addPanel(PANEL_ID, {
    title: PANEL_TITLE,
    render: ({ active }) => {
      const storyData: any = api.getCurrentStoryData();
      const cssParser = new CssParser();
      const scssParser = new ScssParser();
      const svgIconParser = new SvgIconParser();
      const files = storyData
        ? storyData.parameters.designToken.files
        : undefined;

      if (files) {
        parsedCss = parsedCss || cssParser.parse(files);
        parsedScss = parsedScss || scssParser.parse(files);
        parsedSvgIcons = parsedSvgIcons || svgIconParser.parse(files);

        parsed = {
          hardCodedValues: [...parsedCss.hardCodedValues],
          keyframes: parsedCss.keyframes + parsedScss.keyframes,
          tokenGroups: [
            ...parsedCss.tokenGroups,
            ...parsedScss.tokenGroups,
            ...parsedSvgIcons.tokenGroups
          ]
        };
      }

      return (
        parsed && (
          <DesignTokenPanel
            channel={channel}
            api={api}
            active={active}
            hardCodedValues={parsed.hardCodedValues}
            keyframes={parsed.keyframes}
            tokenGroups={parsed.tokenGroups}
          />
        )
      );
    }
  });
});
