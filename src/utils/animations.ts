// Shared animation variants for consistent effects across components
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200
    }
  }
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleButton = {
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200
    }
  }
};

export const navbarAnimation = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};