export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--text-main-color": " #ef305e",
    "--bg-main-color": " #ef305e",
    // "--text-white-color":" #fff",
    // "--bg-white-color":" #fff",
    // "--text-dark-color":" #111",
    // "--bg-dark-color":" #111"
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--text-main-color": "#000",
    "--bg-main-color": " #111",
    // "--text-white-color":" #1e1e2d",
    // "--bg-white-color":" #1e1e2d",
    // "--text-dark-color":" #fff",
    // "--bg-dark-color":" #fff"
  },
};


