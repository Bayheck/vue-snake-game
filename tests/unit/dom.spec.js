import DOM from '@/classes/DOM';

describe('DOM class', () => {
  describe('getGameAreaElement method', () => {
    it('should return the game area element', () => {
      const gameAreaElement = document.createElement('div');
      gameAreaElement.setAttribute('id', 'gameAreaWrapper');
      document.body.appendChild(gameAreaElement);

      const result = DOM.getGameAreaElement();

      expect(result).toBe(gameAreaElement);
    });
  });

  describe('createGameAreaField method', () => {
    it('should create a game area field with specified properties', () => {
      const field = DOM.createGameAreaField(1, 2, '100px', '100px');

      expect(field.tagName).toBe('DIV');
      expect(field.classList.contains('areaField')).toBe(true);
      expect(field.id).toBe('1:2');
      expect(field.style.width).toBe('100px');
      expect(field.style.height).toBe('100px');
    });
  });

  describe('fieldIsEmpty method', () => {
    it('should return true if the field is empty', () => {
      const snakeParts = [{ x: 3, y: 4 }, { x: 5, y: 6 }];

      const result = DOM.fieldIsEmpty(1, 2, snakeParts);

      expect(result).toBe(true);
    });

    it('should return false if the field is occupied by snake parts', () => {
      const snakeParts = [{ x: 3, y: 4 }, { x: 5, y: 6 }];

      const result = DOM.fieldIsEmpty(3, 4, snakeParts);

      expect(result).toBe(false);
    });
  });

  describe('getFieldByCoords method', () => {
    it('should return the DOM element with specified coordinates', () => {
      const fieldElement = document.createElement('div');
      fieldElement.setAttribute('id', '1:2');
      document.body.appendChild(fieldElement);

      const result = DOM.getFieldByCoords(1, 2);

      expect(result).toBe(fieldElement);
    });
  });
});
