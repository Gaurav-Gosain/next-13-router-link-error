import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  const styles = { border: "1px solid black", padding: 10, marginTop: 10 };

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body style={styles}>
        <Navbar />
        <main>
          <small>root layout</small>
          <div style={styles}>
            <small>sub layout</small>
            {children}
          </div>
        </main>
        <div style={styles}>
          <pre
            style={{
              width: "100%",
              overflowX: "scroll",
            }}
          >
            {JSON.stringify(children, null, 2)}
          </pre>
        </div>
      </body>
    </html>
  );
}
