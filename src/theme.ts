// import { ThemeOptions, Theme as MUITheme } from "@mui/material";

// export type paletteTypes =
//   | "primary"
//   | "inherit"
//   | "secondary"
//   | "success"
//   | "error"
//   | "info"
//   | "warning"
//   | "grey1"
//   | "aqua"
//   | "lightPink"
//   | "lightBlue"
//   | "darkPink"
//   | "darkBlue"
//   | string;

// type buttonTypes = "contained" | "text" | "outlined" | undefined;

// declare module "@mui/material/styles" {
//   interface Palette {
//     pw: {
//       scrollbackground: React.CSSProperties["color"];
//       border: React.CSSProperties["color"];
//       darkBlue: React.CSSProperties["color"];
//       midBlue: React.CSSProperties["color"];
//       midBlue2: React.CSSProperties["color"];
//       goalCardInside: React.CSSProperties["color"];
//       chatBG: React.CSSProperties["color"];
//       green: React.CSSProperties["color"];
//       blue: React.CSSProperties["color"];
//       blue1: React.CSSProperties["color"];
//       blue2: React.CSSProperties["color"];
//       grey1: React.CSSProperties["color"];
//       rejectedBG: React.CSSProperties["color"];
//       transparentWhite: React.CSSProperties["color"];
//       chatCardBorder: {
//         primary: React.CSSProperties["color"];
//         secondary: React.CSSProperties["color"];
//         grey: React.CSSProperties["color"];
//       };
//       inputBG: React.CSSProperties["color"];
//       teal: React.CSSProperties["color"];
//       messageSeenCheck: React.CSSProperties["color"];
//       chatCard: {
//         approveBlue: React.CSSProperties["color"];
//         rejectRed: React.CSSProperties["color"];
//         rejectRedLight: React.CSSProperties["color"];
//         rejectRedBG: React.CSSProperties["color"];
//         normalPendingHighlight: React.CSSProperties["color"];
//         criticalPendingHighlight: React.CSSProperties["color"];
//         normalPendingBorder: React.CSSProperties["color"];
//         criticalPendingBorder: React.CSSProperties["color"];
//       };
//       dashboardStretchCard: {
//         lightOrange: React.CSSProperties["color"];
//         lightGreen: React.CSSProperties["color"];
//         lightPink: React.CSSProperties["color"];
//         lightViolet: React.CSSProperties["color"];
//       };
//       goalProgressCard: {
//         aqua: React.CSSProperties["color"];
//         lightGreen: React.CSSProperties["color"];
//         lighterBlue: React.CSSProperties["color"];
//         lightPink: React.CSSProperties["color"];
//         lightBlue: React.CSSProperties["color"];
//         darkBlue: React.CSSProperties["color"];
//         darkPink: React.CSSProperties["color"];
//       };
//       divider: {
//         main: React.CSSProperties["color"];
//         secondary: React.CSSProperties["color"];
//       };
//       dashboardGraph: {
//         lightGrey: React.CSSProperties["color"];
//       };
//       chatbotText: {
//         blue: React.CSSProperties["color"];
//         lightBlueBg: React.CSSProperties["color"];
//       };
//     };
//   }
// }
// const themeObject = {
//   palette: {
//     primary: {
//       main: "#5394FF", // Blue
//       light: "#9FC4FF",
//       dark: "#87b2f8",
//       contrastText: "#F8FBFF",
//     },
//     secondary: {
//       main: "#E7F0FD", // Light Blue
//       contrastText: "#F8FBFF",
//     },
//     background: {
//       default: "#F8FBFF", // Low Contrast Blue
//     },
//     text: {
//       primary: "#2D3142", // Dark Grey
//       secondary: "#838D9E", // Mid Grey
//       disabled: "#A7AEBA",
//     },
//     error: {
//       main: "#FF6672",
//     },
//     warning: {
//       main: "#FF972A", // Orange
//     },
//     success: {
//       main: "#83E983",
//       light: "#b9f5b9",
//     },
//     info: {
//       main: "#87b2f8",
//       light: "#abcaff",
//       dark: "#5394ff26",
//     },
//     goalProgressCard: {
//       aqua: "#A2EBF4",
//       lightPink: "#EDB9FA",
//       lightBlue: "#98BFFF",
//       darkBlue: "#5869FF",
//       darkPink: "#FF69D5",
//       lighterBlue: "#CBE0FF",
//       lightGreen: "#36B636",
//     },
//     grey: {
//       100: "#4f5d75",
//       200: "#eeeff1",
//       300: "#eff5ff",
//       400: "#e3e6e8",
//       500: "#eaeaea",
//     },
//     divider: "#838D9E",
//     grey1: { main: "#A7AEBA" },
//     aqua: {
//       main: "#A2EBF4",
//     },
//     lightPink: {
//       main: "#EDB9FA",
//     },
//     darkPink: {
//       main: "#FF69D5",
//     },
//     lightBlue: {
//       main: "#98BFFF",
//     },
//     darkBlue: {
//       main: "#5869FF",
//     },
//     pw: {
//       scrollbackground: "#f1f1f1",
//       border: "#EAECF0",
//       darkBlue: "#0F67FA",
//       midBlue: "#9FC4FF",
//       midBlue2: "#87b2f8",
//       goalCardInside: "#eff5ff",
//       chatBG: "#e3e6e8",
//       green: "#b9f5b9",
//       blue: "#063279",
//       blue1: "#abcaff",
//       blue2: "#5394ff26",
//       grey1: "#eeeff1",
//       inputBG: "#f6f7f8",
//       teal: "#abe0e7",
//       messageSeenCheck: "#14B2F5",
//       message: {
//         greyBG: "#e9ebee",
//         greyBR: "#e3e5e9",
//       },
//       divider: {
//         main: "#838D9E",
//         secondary: "#EAECF0",
//       },
//       card_title: {
//         maroon: "#804f5d75",
//       },
//       rejectedBG: "#fffbf6",
//       chatCardBorder: {
//         primary: "#4285F4",
//         secondary: "#4285F44D",
//         grey: "#2D314208",
//       },
//       transparentWhite: "#eaf2ff",
//       chatCard: {
//         approveBlue: "#5394FF", // Blue
//         rejectRed: "#FF6672",
//         rejectRedLight: "#FFA9B0",
//         rejectRedBG: "#FFF7F8",
//         normalPendingHighlight: "", // blue action
//         criticalPendingHighlight: "", // red action
//         normalPendingBorder: "#4285F466",
//         criticalPendingBorder: "#FF972A66",
//       },
//       dashboardStretchCard: {
//         lightOrange: "#FFD39F",
//         lightGreen: "#ABF7B7",
//         lightPink: "#FF9FAB",
//         lightViolet: "#A79FFF",
//       },
//       goalProgressCard: {
//         Aqua: "#A2EBF4",
//         LightPink: "#EDB9FA",
//         LightBlue: "#98BFFF",
//       },
//       dashboardGraph: {
//         lightGrey: "#E2E7EE",
//       },
//       chatbotText: {
//         blue: "#3f64a1",
//         lightBlueBg: "#f5f9ff",
//       },
//     },
//     common: {
//       black: "#000000",
//       white: "#ffffff",
//     },
//   },
//   shadows: [
//     "none",
//     "0px 2px 4px rgba(0, 0, 0, 0.15)",
//     "0 1px 0.5px -1px rgb(0 0 0 / 16%), 0 1px 2px 0 rgb(0 0 0 / 10%),  0 0 2px 0 rgb(0 0 0 / 8%)",
//     "0px 1px 2px rgba(0, 0, 0, 0.2)",
//     "0px 0px 16px 0px rgb(214 214 214)",
//     "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
//     "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
//     "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
//     "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
//     "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
//     "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
//     "0px 1px 2px rgb(0 0 0 / 20%)",
//     "0px 2px 4px rgb(0 0 0 / 15%)",
//     "2px 2px 4px rgba(0, 0, 0, 0.1)",
//     "2px 2px 4px rgba(66, 133, 244, 0.3)",
//     "2px 4px 8px rgba(0, 0, 0, 0.12)",
//     "4px 4px 4px rgba(0, 0, 0, 0.1)",
//   ],
//   typography: {
//     fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
//     fontSize: 16,
//     body2: {
//       fontSize: 12,
//     },
//     body1: {
//       fontSize: 16,
//     },
//     button: {
//       fontSize: 16,
//       fontWeight: 1000,
//     },
//     overline: {
//       fontSize: 14,
//       textTransform: "lowercase",
//     },
//     subtitle2: {
//       fontSize: 10,
//     },
//     subtitle1: {
//       fontSize: 12,
//     },
//     caption: {
//       fontSize: 12,
//       fontWeight: 1000,
//     },
//     h5: {
//       fontSize: 12,
//       fontWeight: 500,
//     },
//     h4: {
//       fontSize: 14,
//     },
//     h3: {
//       fontSize: 18,
//     },
//   },
//   components: {
//     MuiAccordion: {
//       styleOverrides: {
//         root: {
//           boxShadow: "none",
//         },
//       },
//     },
//     MuiAccordionSummary: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#E7F0FD",
//           border: "none",
//           outline: "none",
//         },
//       },
//     },
//     MuiButton: {
//       defaultProps: {
//         disableRipple: true,
//         variant: "contained" as buttonTypes,
//         color: "primary" as paletteTypes,
//       },
//       styleOverrides: {
//         root: {
//           color: "",
//           "&:active": {
//             boxShadow: "none",
//           },
//           "&:hover": {
//             boxShadow: "none",
//           },
//           "&.Mui-disabled": {
//             background: "#97BCF9",
//             color: "#ffffff",
//           },
//         },
//         outlined: {
//           backgroundColor: "#F8FBFF",
//         },
//       },
//     },
//   },
// } as unknown as ThemeOptions;

// // To get proper type checks
// export default themeObject;
