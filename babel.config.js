module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // Define the root directory for components
          alias: {
            "@/components": "./src/components", // Alias for components
            "@/constants": "./src/constants",
            "@/hooks": "./src/hooks",
            "@/assets": "./assets", // Alias for assets (root folder)
            "tailwind.config": "./tailwind.config.js",
          },
        },
      ],
    ],
  };
};
