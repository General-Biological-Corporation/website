import { MOBILE_BREAKPOINT } from "../../../hooks/useDimensions";

import * as components from "./components";
import { palette } from "./palette";
import { textStyles } from "./textStyles";

export const base = {
  palette,
  textStyles,
  components,
  breakpoints: {
    mobile: MOBILE_BREAKPOINT,
  },
};
