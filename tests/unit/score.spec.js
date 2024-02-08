import { score } from '@/classes/Score';

describe('Score class', () => {
  beforeEach(() => {
    score.restore();
  });

  describe('increase method', () => {
    it('should increase the reached score by the reward amount', () => {
      score.increase();
      expect(score.reached).toBe(5);
    });
  });

  describe('increaseSpeedGrade method', () => {
    it('should increase the speed grade number by 1', () => {
      score.increaseSpeedGrade();
      expect(score.speedGradeNumber).toBe(2);
    });
  });

  describe('increaseNextBreakpoint method', () => {
    it('should increase the next breakpoint by 1', () => {
      score.increaseNextBreakpoint();
      expect(score.nextBreakpoint).toBe(1);
    });
  });
});
