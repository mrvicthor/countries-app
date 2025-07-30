export const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const itemVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
