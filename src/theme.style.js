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
    background: colors.babyBlue,
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
  font: general.font,
  color: {
    text: general.color.text,
  },
  input: {
    color: {
      background: colors.white,
      border: colors.iron,
    },
    border: {
      thickness: '1px',
      radius: '3px',
    },
    font: {
      size: general.font.size,
    },
    padding: '.25em 1em',
    height: '1.5em',
  },
  button: {
    border: {
      thickness: '1px',
      radius: '3px',
    },
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
    font: {
      size: '1em',
      weight: 'bold',
    },
    size: {
      large: {
        padding: '1.5em 2em',
        font: { size: '1.2em' },
      },
      small: {
        padding: '.25em .5em',
        font: { size: '1em' },
      },
      tiny: {
        padding: '0 0.25em',
        font: { size: '.8em' },
      },
    },
    margin: '1em',
    padding: '.5em 1em',
    height: '1.5em',
  },
};

const modal = {
  content: {
    border: {
      thickness: '1px',
      radius: '3px',
    },
    color: {
      background: colors.babyBlue,
      border: colors.iron,
    },
    padding: '1.5em',
  },
};

export default { general, header, form, modal };
