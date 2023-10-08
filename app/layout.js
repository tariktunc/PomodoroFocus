"use client";

import "./globals.css";
import { Provider } from "react-redux";
import store from "../Redux/store";

// export const metadata = {
//   title: {
//     default: "Study Timeer",
//     template: " %s | My Study Clock",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

// suppressHydrationWarning={true} <= Do your research on what it is used for. !!!
