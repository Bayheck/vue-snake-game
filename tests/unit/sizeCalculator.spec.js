import SizeCalculator from '@/classes/SizeCalculator';

describe('SizeCalculator class', () => {
  describe('getClientSizes method', () => {
    it('should return the client sizes of the element', () => {
      const el = {
        clientHeight: 200,
        clientWidth: 300,
      };

      const result = SizeCalculator.getClientSizes(el);

      expect(result).toEqual({ height: 200, width: 300 });
    });
  });

  describe('getRelevantFieldSize method', () => {
    it('should return default field sizes if client sizes are large', () => {
      const result = SizeCalculator.getRelevantFieldSize(1200, 600);

      expect(result).toEqual({
        height: '30px',
        width: '30px',
        pureHeight: 30,
        pureWidth: 30,
      });
    });

    it('should return reduced field sizes if client sizes are small', () => {
      const result = SizeCalculator.getRelevantFieldSize(800, 400);

      expect(result).toEqual({
        height: '20px',
        width: '20px',
        pureHeight: 20,
        pureWidth: 20,
      });
    });

    it('should return default field sizes if client sizes are equal to the threshold', () => {
      const result = SizeCalculator.getRelevantFieldSize(1000, 500);

      expect(result).toEqual({
        height: '30px',
        width: '30px',
        pureHeight: 30,
        pureWidth: 30,
      });
    });

    it('should return reduced field sizes if client width is less than threshold', () => {
      const result = SizeCalculator.getRelevantFieldSize(900, 600);

      expect(result).toEqual({
        height: '20px',
        width: '20px',
        pureHeight: 20,
        pureWidth: 20,
      });
    });

    it('should return reduced field sizes if client height is less than threshold', () => {
      const result = SizeCalculator.getRelevantFieldSize(1000, 400);

      expect(result).toEqual({
        height: '20px',
        width: '20px',
        pureHeight: 20,
        pureWidth: 20,
      });
    });
  });

  describe('calculateAreaSize method', () => {
    it('should calculate area size based on client sizes and default field sizes', () => {
      const clientWidth = 900;
      const clientHeight = 450;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result).toEqual({ x: 45, y: 22 });
    });

    it('should calculate area size based on client sizes and reduced field sizes', () => {
      const clientWidth = 800;
      const clientHeight = 400;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result).toEqual({ x: 40, y: 20 });
    });

    it('should return an object with x and y properties', () => {
      const clientWidth = 700;
      const clientHeight = 350;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result).toHaveProperty('x');
      expect(result).toHaveProperty('y');
    });

    it('should return an object with non-negative x and y values', () => {
      const clientWidth = 700;
      const clientHeight = 350;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result.x).toBeGreaterThanOrEqual(0);
      expect(result.y).toBeGreaterThanOrEqual(0);
    });

    it('should return x and y values that are integers', () => {
      const clientWidth = 700;
      const clientHeight = 350;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(Number.isInteger(result.x)).toBe(true);
      expect(Number.isInteger(result.y)).toBe(true);
    });

    it('should return x and y values based on clientWidth and clientHeight', () => {
      const clientWidth = 1234;
      const clientHeight = 567;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result.x).toBe(Math.floor(clientWidth / 30));
      expect(result.y).toBe(Math.floor(clientHeight / 30));
    });

    it('should return x and y values as zero if clientWidth or clientHeight is zero', () => {
      const clientWidth = 0;
      const clientHeight = 0;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });

    it('should return x and y values as zero if clientWidth or clientHeight is negative', () => {
      const clientWidth = -700;
      const clientHeight = 350;

      const result = SizeCalculator.calculateAreaSize(clientWidth, clientHeight);

      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });
  });
});
