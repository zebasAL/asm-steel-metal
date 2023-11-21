
const ROOTS = {
  AUTH: '/auth',
  USERS: '/usuarios',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  root: '/',
  users: {
    root: `${ROOTS.USERS}`,
    details: (id: string) => `${ROOTS.USERS}/${id}`,
  },
  signin: `/signin`,
  verify: `/verify`,
  signup: `/signup`,
  newPassword: `/new-password`,
  forgotPassword: `/forgot-password`,
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',

  user: {
    root: `${ROOTS.DASHBOARD}/user`,
    profile: `${ROOTS.DASHBOARD}/user/profile`,
    account: `${ROOTS.DASHBOARD}/user/account`,
    edit: (id: string) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
  },
};
