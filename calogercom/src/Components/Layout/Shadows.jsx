const SHADOW_COLOR = 'rgba(0,0,0,0.15)'
const SHADOW_COLOR_SM = 'rgba(128,128,128,0.75)'
const SHADOW_COLOR_MD = 'rgba(128,128,128,0.33)'
const SHADOW_COLOR_LG = 'rgba(128,128,128,0.20)'

export const SHADOWS = {
    small: `
      box-shadow: 0px 0px 1px ${SHADOW_COLOR_SM};
    `,
    medium: `
      box-shadow: 0px 0px 2px ${SHADOW_COLOR_MD},
      0px 0px 4px ${SHADOW_COLOR_MD},
      0px 0px 6px ${SHADOW_COLOR_MD};
    `,
    large: `
      box-shadow: 0px 0px 2px ${SHADOW_COLOR_LG},
      0px 0px 4px ${SHADOW_COLOR_LG},
      0px 0px 8px ${SHADOW_COLOR_LG},
      0px 0px 16px ${SHADOW_COLOR_LG},
      0px 0px 32px ${SHADOW_COLOR_LG};
    `
  }