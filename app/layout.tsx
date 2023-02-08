import StarterNav from "@/ui/StarterNav";
import "./globals.css";

import ProvidersWrapper from "./ProvidersWrapper";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className="">
        <main>
          <ProvidersWrapper>
            <StarterNav />
            {children}
          </ProvidersWrapper>
        </main>
      </body>
    </html>
  );
}
