function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div className="bg-[#fdfdfd]">
      {children}
    </div>
  )
}

export default RootLayout
