class SizeCalculator {
  static getClientSizes(el) {
    return {
      height: el.clientHeight,
      width: el.clientWidth,
    };
  }

  static getRelevantFieldSize(clientWidth, clientHeight) {
    let fieldHeight = 30;
    let fieldWidth = 30;

    if (clientWidth < 1000 || clientHeight < 500) {
      fieldHeight = 20;
      fieldWidth = 20;
    }

    return {
      height: `${fieldHeight}px`,
      width: `${fieldWidth}px`,
      pureHeight: fieldHeight,
      pureWidth: fieldWidth,
    };
  }

  static calculateAreaSize(clientWidth, clientHeight) {
    // Return zero values if clientWidth or clientHeight is negative or zero
    if (clientWidth <= 0 || clientHeight <= 0) {
      return { x: 0, y: 0 };
    }

    const fieldSizes = SizeCalculator.getRelevantFieldSize(clientWidth, clientHeight);
    const x = Math.floor(clientWidth / fieldSizes.pureWidth);
    const y = Math.floor(clientHeight / fieldSizes.pureHeight);

    return { x, y };
  }
}

export default SizeCalculator;
