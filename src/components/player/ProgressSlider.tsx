import React from 'react';
import {ProgressComponent} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {Box, Text} from 'react-native-design-utility';

import {theme} from '../../constants/theme';
import {PlayerContext} from '../../contexts/PlayerContext';

function buildTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(seconds).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${minutesStr}:${secondsStr}`;
  }

  return `${minutesStr}:${secondsStr}`;
}

class ProgressSlider extends ProgressComponent {
  static contextType = PlayerContext;

  get totalTime(): string {
    return buildTime(this.state.duration - this.state.position);
  }

  get currentTime(): string {
    return buildTime(this.state.position);
  }

  render() {
    return (
      <>
        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={this.state.duration}
          value={this.state.position}
          onValueChange={(value) => {
            this.context.goTo(value);
          }}
          minimumTrackTintColor={theme.color.blueLight}
          maximumTrackTintColor={`${theme.color.blueLight}30`}
        />
        <Box dir="row" align="center" justify="between">
          <Text>{this.currentTime}</Text>
          <Text>-{this.totalTime}</Text>
        </Box>
      </>
    );
  }
}

export default ProgressSlider;
