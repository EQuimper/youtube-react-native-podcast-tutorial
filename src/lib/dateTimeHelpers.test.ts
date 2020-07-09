import {getWeekDay, humanDuration, WeekDayEnum} from './dateTimeHelpers';

describe('dateTimeHelpers', () => {
  describe('#getWeekDay()', () => {
    test.each`
      date                                    | expected
      ${new Date('2020-06-21T13:27:34.610Z')} | ${WeekDayEnum.Sunday}
      ${new Date('2020-06-22T13:27:34.610Z')} | ${WeekDayEnum.Monday}
      ${new Date('2020-06-23T13:27:34.610Z')} | ${WeekDayEnum.Tuesday}
      ${new Date('2020-06-24T13:27:34.610Z')} | ${WeekDayEnum.Wednesday}
      ${new Date('2020-06-25T13:27:34.610Z')} | ${WeekDayEnum.Thursday}
      ${new Date('2020-06-26T13:27:34.610Z')} | ${WeekDayEnum.Friday}
      ${new Date('2020-06-27T13:27:34.610Z')} | ${WeekDayEnum.Saturday}
    `('should return $expected for the given date', ({date, expected}) => {
      expect(getWeekDay(date)).toBe(expected);
    });
  });

  describe('#humanDuration()', () => {
    it('should return the duration human readable', () => {
      expect(humanDuration('03:13:00')).toBe('3hrs. 13min');
      expect(humanDuration('11:54:00')).toBe('11hrs. 54min');
      expect(humanDuration('10:01:00')).toBe('10hrs. 01min');
      expect(humanDuration('00:55:00')).toBe('55min');
      expect(humanDuration('16:18')).toBe('16min');
    });
  });
});
