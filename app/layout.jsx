import '@styles/globals.css'

export const metadata = {
  title: "Jaineel's Portfolio",
  description: "check out my jaineel's portfolio",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
