'use client'

const onlyDesktop = (theme) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
});
const onlyMobile = (theme) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
});

export { onlyDesktop, onlyMobile }