module.exports = {
  expo: {
    name: "proy-mobile",
    slug: "proy-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.tuusuario.proymobile",
      googleServicesFile: "./google-services.json",
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEI
        }
      }
    },
    ios: {
      supportsTablet: true,
      bundleItentifier: "com.tuusuario.proymobile",
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEI
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "32813461-2d62-4c03-ba46-aa80a9d6ead7"
      }
    },
    owner: "cristian04",
    plugins: [
      [
        "expo-notifications",
        {
          "icon": "./assets/icon.png", // Asegúrate de tener este archivo
          "color": "#ffffff"
        }
      ],
    ],
  }
};