export default (theme) => ({
  root: {
    backgroundColor: theme.palette.black,
    color: theme.palette.white,

    '&:hover': {
      backgroundColor: theme.palette.black,
      color: theme.palette.white,
    },

    '&.MuiButton-outlined': {
      borderColor: 'none',
      borderRadius: 40,
    },
  },
});
