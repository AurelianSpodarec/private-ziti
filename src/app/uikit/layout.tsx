import UIKitNavigation from "./_components/UIKitNavigation"

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <div>
      <div className="dark:bg-gray-800">
        {/* <Header /> */}

        <div className="relative mx-auto flex">

          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="sticky -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden pb-16 pl-0.5">
              <UIKitNavigation
                className="w-[80rem] pr-8 xl:w-72 xl:pr-16"
              />
              Nav
            </div>
          </div>


          <div className="min-w-0 max-w-2xl bg-white flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 ml-[20rem]">
            <article className="max-w-4xl xl:mr-[10.5rem]">
              {/* {(title || section) && (
                <header className="mb-9 space-y-1">
                  {section && (
                    <p className="font-display text-sm font-medium text-sky-500">
                      {section.title}
                    </p>
                  )}
                  {title && (
                    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                      {title}
                    </h1>
                  )}
                </header>
              )}
              <Prose>{children}</Prose> */}
              {children}
            </article>

            <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
              <h2>Tale of Content</h2>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RootLayout
