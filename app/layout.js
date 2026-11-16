
import "./globals.css";

export const metadata = {
  title: "Meu Perfil | LinkedIn",
  description: "Clone de uma página de perfil do LinkedIn desenvolvido com Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
