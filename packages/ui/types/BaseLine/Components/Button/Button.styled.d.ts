declare const _default: {
    ButtonBaseLineVariables: ({ prefix, palette, transitions, shadows, }: {
        prefix: string;
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
            up(breakPoint: string): string;
            down(breakPoint: string): string;
        };
        dayjs: typeof import("dayjs");
        space: {
            default: number;
            dense: number;
            large: number;
        };
        direction: string;
        mixins: {
            toolbar: {
                minHeight: number;
                "@media (min-width:0px) and (orientation: landscape)": {
                    minHeight: number;
                };
                "@media (min-width:600px)": {
                    minHeight: number;
                };
            };
        };
        overrides: {};
        palette: {
            common: {
                black: string;
                white: string;
            };
            type: string;
            primary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            error: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            warning: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            info: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            success: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            grey: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
                A100: string;
                A200: string;
                A400: string;
                A700: string;
            };
            contrastThreshold: number;
            tonalOffset: number;
            text: {
                primary: string;
                secondary: string;
                disabled: string;
                hint: string;
            };
            divider: string;
            background: {
                paper: string;
                default: string;
            };
            action: {
                active: string;
                hover: string;
                hoverOpacity: number;
                selected: string;
                selectedOpacity: number;
                disabled: string;
                disabledBackground: string;
                disabledOpacity: number;
                focus: string;
                focusOpacity: number;
                activatedOpacity: number;
            };
        };
        props: {};
        shadows: string[];
        typography: {
            importFonts: string;
            htmlFontSize: number;
            fontFamily: string;
            fontSize: string;
            fontWeightLight: number;
            fontWeightRegular: number;
            fontWeightMedium: number;
            fontWeightBold: number;
            fontWeight: number;
            fontStyle: string;
            fontStretch: string;
            textTransform: string;
            opacity: number;
            letterSpacing: number;
            h1: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h2: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h3: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h4: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h5: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h6: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: number;
            };
            subtitle1: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            subtitle2: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            body1: {
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            body2: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            button: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            caption: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            overline: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
        };
        shape: {
            borderRadius: number;
        };
        transitions: {
            easing: {
                easeInOut: string;
                easeOut: string;
                easeIn: string;
                sharp: string;
                linear: string;
            };
            duration: {
                shortest: number;
                shorter: number;
                short: number;
                standard: number;
                complex: number;
                enteringScreen: number;
                leavingScreen: number;
            };
        };
        zIndex: {
            mobileStepper: number;
            speedDial: number;
            appBar: number;
            drawer: number;
            modal: number;
            snackbar: number;
            tooltip: number;
        };
    }) => import("@emotion/utils").SerializedStyles;
    ButtonBaseLineInitial: ({ prefix, transitions, }: {
        prefix: string;
        breakpoints: {
            values: {
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
            up(breakPoint: string): string;
            down(breakPoint: string): string;
        };
        dayjs: typeof import("dayjs");
        space: {
            default: number;
            dense: number;
            large: number;
        };
        direction: string;
        mixins: {
            toolbar: {
                minHeight: number;
                "@media (min-width:0px) and (orientation: landscape)": {
                    minHeight: number;
                };
                "@media (min-width:600px)": {
                    minHeight: number;
                };
            };
        };
        overrides: {};
        palette: {
            common: {
                black: string;
                white: string;
            };
            type: string;
            primary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            secondary: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            error: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            warning: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            info: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            success: {
                light: string;
                main: string;
                dark: string;
                contrastText: string;
            };
            grey: {
                "50": string;
                "100": string;
                "200": string;
                "300": string;
                "400": string;
                "500": string;
                "600": string;
                "700": string;
                "800": string;
                "900": string;
                A100: string;
                A200: string;
                A400: string;
                A700: string;
            };
            contrastThreshold: number;
            tonalOffset: number;
            text: {
                primary: string;
                secondary: string;
                disabled: string;
                hint: string;
            };
            divider: string;
            background: {
                paper: string;
                default: string;
            };
            action: {
                active: string;
                hover: string;
                hoverOpacity: number;
                selected: string;
                selectedOpacity: number;
                disabled: string;
                disabledBackground: string;
                disabledOpacity: number;
                focus: string;
                focusOpacity: number;
                activatedOpacity: number;
            };
        };
        props: {};
        shadows: string[];
        typography: {
            importFonts: string;
            htmlFontSize: number;
            fontFamily: string;
            fontSize: string;
            fontWeightLight: number;
            fontWeightRegular: number;
            fontWeightMedium: number;
            fontWeightBold: number;
            fontWeight: number;
            fontStyle: string;
            fontStretch: string;
            textTransform: string;
            opacity: number;
            letterSpacing: number;
            h1: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h2: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h3: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h4: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h5: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            h6: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: number;
            };
            subtitle1: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            subtitle2: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            body1: {
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            body2: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            button: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: number;
            };
            caption: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
            overline: {
                opacity: number;
                textTransform: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: number;
                letterSpacing: number;
            };
        };
        shape: {
            borderRadius: number;
        };
        transitions: {
            easing: {
                easeInOut: string;
                easeOut: string;
                easeIn: string;
                sharp: string;
                linear: string;
            };
            duration: {
                shortest: number;
                shorter: number;
                short: number;
                standard: number;
                complex: number;
                enteringScreen: number;
                leavingScreen: number;
            };
        };
        zIndex: {
            mobileStepper: number;
            speedDial: number;
            appBar: number;
            drawer: number;
            modal: number;
            snackbar: number;
            tooltip: number;
        };
    }) => import("@emotion/utils").SerializedStyles;
};
export default _default;
