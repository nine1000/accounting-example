import Head from "next/head"
import Link from "next/link"

const Page = (props) => {
  const { title, children } = props

  return (
    <div className="h-full sm:w-full md:w-5/6 lg:w-8/12 shadow mx-auto">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex justify-between p-4 border-b border-slate-100">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a>Journal</a>
              </Link>
            </li>
            <li>
              <Link href="/add-entry">
                <a>Add entry</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Page
