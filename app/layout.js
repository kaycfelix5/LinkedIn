
import "./globals.css";

export const metadata = {
  title: "NEXO | Rede Profissional",
  description: "Conecte ideias. Construa oportunidades.",
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
