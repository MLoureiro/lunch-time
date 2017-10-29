const colors = {
  white: '#ffffff',
  babyBlue: '#4effef',
  neptune: '#73a6ad',
  pinkPearl: '#dbafce',
  iron: '#cccccc',
  gunPowder: '#474551',
  comet: '#636172',

  primary: {
    normal: '#90caf9',
    light: '#c3fdff',
    dark: '#5d99c6',
    text: '#000000',
  },
  secondary: {
    normal: '#455a64',
    light: '#718792',
    dark: '#1c313a',
    text: '#ffffff',
  },
};

const general = {
  color: {
    background: colors.babyBlue,
    text: colors.neptune,
  },
  font: {
    family: 'Comfortaa, cursive',
    size: '16px',
  },
};

const button = {
  border: {
    thickness: '1px',
    radius: '3px',
  },
  color: {
    primary: {
      normal: colors.primary.normal,
      active: colors.primary.dark,
      text: colors.primary.text,
    },
    secondary: {
      normal: colors.secondary.normal,
      active: colors.secondary.light,
      text: colors.secondary.text,
    },
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
    size: general.font.size,
    family: general.font.family,
  },
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

export default { general, header, button, form, modal };
