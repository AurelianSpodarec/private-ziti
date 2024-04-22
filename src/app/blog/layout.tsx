function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div>
      {children}
    </div>
  )
}

export default RootLayout
