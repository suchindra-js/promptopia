import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { FC, ReactNode } from "react";

export const metadata = {
  title: "Better",
  description: "Discover & Share Ideas",
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
