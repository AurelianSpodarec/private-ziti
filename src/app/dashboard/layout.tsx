import Navigation from "./_components/Navigation"

function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative h-full">
      <div id="context-wrap" className={`flex flex-col h-full`}>
        <Navigation />
        <div className={`flex lg:pl-[200px] flex-col h-full relative`}>
          <main className="h-full w-full">
            {children}
            {/* <Notification /> */}
          </main>
        </div>
      </div>
    </main>
  )
}

export default RootLayout
