module.exports = {
    corePlugins: {
        // ...
        lineHeight: false,
        placeholder: false,
        placeholderOpacity: false,
        textOpacity: false,
        backgroundOpacity: false,
        backgroundPosition: false,
        backgroundImage: false,
        gradientColorStops: false,
        borderOpacity: false,
        divideColor: false,
        divideOpacity: false,
        ringOpacity: false,
        ringOffsetColor: false,
        mixBlendMode: false,
        backgroundBlendMode: false,
        brightness: false,
        contrast: false,
        dropShadow: false,
        hueRotate: false,
        invert: false,
        saturate: false,
        sepia: false,
        backdropFilter: false,
        backdropBlur: false,
        backdropBrightness: false,
        backdropContrast: false,
        backdropGrayscale: false,
        backdropHueRotate: false,
        backdropInvert: false,
        backdropOpacity: false,
        backdropSaturate: false,
        backdropSepia: false,
        transitionDelay: false,
        transform: false,
        transformOrigin: false,
        scale: false,
        rotate: false,
        translate: false,
        skew: false,
    },
    theme: {
        extends: {
            colors: {
                primary: "#3a3a3a",
                secondary: "#111213",
                background: "#1e1e90fc",
            },
        },
        fontFamily: {
            sans: "Helvetica,Helvetica Neue,Arial,Lucida Grande,sans-serif",
        },
        fontSize: {
            base: ".875rem",
        },
        colors: {
            white: "#ffffff",
            primary: "#3a3a3a",
            secondary: "#111213",
            background: "#1e1e90fc",
        },
        spacing: {
        0: "0px",
        },
        margin: {
        0: "0px",
        },
        borderRadius: {
            DEFAULT: "0.25rem",
            100: "100%",
        },
        borderWidth: {
            0: "0px",
            DEFAULT: "1px",
        },
    opacity: {},
    boxShadow: {
        DEFAULT: "0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)",
        },
    },
    variants: {
        extend: {
        borderWidth: ["first", "last"],
        margin: ["first", "last"],
        padding: ["first", "last"],
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
    ],
};
