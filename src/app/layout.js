import '../styles/global.css'

export const metadata = {
  title: "Storeman"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body style={{margin: 'auto' }}>
        {children}
      </body>
    </html >
  );
}
