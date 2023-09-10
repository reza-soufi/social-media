"use client";
import "./global.css";
import Header from "@/components/Layout/Header";
import { MainContainer } from "@/components/StyledComponents/commonStyles/MainContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "App",
  description: "new social app",
};

const theme = createTheme({
  typography: {
    fontFamily: "Dana",
  },
  palette: {
    primary: {
      main: "#1f2245",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <MainContainer>
            {pathname === "/" && <Header />}
            <main>{children}</main>
          </MainContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
