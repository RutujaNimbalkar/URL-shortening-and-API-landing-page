import { useState } from "react"
import logo from "../images/logo.svg"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <>
        <header className= "header max-width py-5">
        <div className="flex items-center justify-between">
            <img src={logo} alt=""/>
          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0"> 
              <nav>
                <ul>
                  <li><button>Features</button></li>
                  <li className="my-5 md:my-0"><button>Pricing</button></li>
                  <li><button>Resources</button></li>
                </ul>
            </nav>
        <ul>
          <li className="my-5 md:my-0"><button>Login</button></li>
          <li><button className="btn-cta rounded-full">  Sign Up</button></li>
        </ul>
            </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="uppercase text-sm -tracking-wide md:hidden">
          {isOpen ? "Close": "Menu"}
        </button>
        </div>
        </header>
      </>

  )
}