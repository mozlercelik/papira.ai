import { hexToRGBA } from "@/utils/hex-to-rgba";

const text = {
    primary: "#2C1810",
    secondary: "#4A3C31",
    disabled: "#8B7D6B"
};

const border = {
    main: "#D4C8B8",
    light: "#E8E0D5",
    secondary: "#C4B8A8"
}

const palette = {
    common: {
        black: "#2C1810",
        white: "#FDFAF5"
    },
    primary: {
        main: "#8B5A2B",
        light: "#A67C52",
        dark: "#6B4423",
        contrastText: "#FDFAF5"
    },
    secondary: {
        main: "#4A3C31",
        light: "#6B5D52",
        dark: "#2C1810",
        contrastText: "#FDFAF5"
    },
    success: {
        main: "#4A6B23",
        light: "#6B8C3C",
        dark: "#2C4A0C",
        contrastText: "#FDFAF5"
    },
    warning: {
        main: "#B58C4A",
        light: "#D4B87C",
        dark: "#8B6C2C",
        contrastText: "#2C1810"
    },
    info: {
        main: "#4A6B8C",
        light: "#6B8CA6",
        dark: "#2C4A6B",
        contrastText: "#FDFAF5"
    },
    error: {
        main: "#8C2C2C",
        light: "#A64A4A",
        dark: "#6B0C0C",
        contrastText: "#FDFAF5"
    },
    grey: {
        50: "#FDFAF5",
        100: "#F5F0E6",
        200: "#E8E0D5",
        300: "#D4C8B8",
        400: "#C4B8A8",
        500: "#A69C8C",
        600: "#8B7D6B",
        700: "#6B5D52",
        800: "#4A3C31",
        900: "#2C1810"
    },
    text: {
        primary: text.primary,
        secondary: text.secondary,
        disabled: text.disabled
    },
    background: {
        paper: "#FDFAF5",
        default: "#F5F0E6"
    },
    action: {
        active: hexToRGBA(text.primary, 0.54),
        hover: hexToRGBA(text.primary, 0.04),
        hoverOpacity: 0.04,
        selected: hexToRGBA(text.primary, 0.08),
        selectedOpacity: 0.08,
        disabled: hexToRGBA(text.primary, 0.26),
        disabledBackground: hexToRGBA(text.primary, 0.12),
        disabledOpacity: 0.38,
        focus: hexToRGBA(text.primary, 0.12),
        focusOpacity: 0.12,
        activatedOpacity: 0.12
    },
    divider: border.main,
    border: {
        main: border.main,
        light: border.light,
        secondary: border.secondary
    }
};

export default palette;