import { MainContainer } from "@/components/StyledComponents/MainContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "new social app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
