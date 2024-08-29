import '../styles/global.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">



      <body style={{margin: 'auto' }}>
        {children}
      </body>
    </html>
  );
}
