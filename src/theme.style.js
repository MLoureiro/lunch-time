const colors = {
  white: '#ffffff',
  babyBlue: '#4effef',
  neptune: '#73a6ad',
  pinkPearl: '#dbafce',
  iron: '#cccccc',
  gunPowder: '#474551',
  comet: '#636172',
};

const general = {
  color: {
    background: colors.white,
    text: colors.neptune,
  },
  font: {
    size: '16px',
  }
};

const header = {
  color: {
    background: colors.pinkPearl,
  }
};

const form = {
  input: {
    color: {
      background: colors.white,
      border: colors.iron,
    },
    font: {
      size: general.font.size,
    },
    border: {
      thickness: '1px',
      radius: '3px',
    },
    padding: '.25em 1em',
    height: '1.5em',
  },
  button: {
    color: {
      background: colors.white,
      border: colors.iron,
      text: colors.neptune,
      hover: {
        background: colors.gunPowder,
        border: colors.gunPowder,
        text: colors.white,
      },
      active: {
        background: colors.comet,
        border: colors.gunPowder,
        text: colors.white,
      },
    },
    border: {
      thickness: '1px',
      radius: '3px',
    },
    padding: '.5em 1em 0',
    height: '1.5em',
  },
};

export default { general, header, form };
