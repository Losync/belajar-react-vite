function App() {

  return (
    // Background or Container
    <section className='h-screen bg-gradient-to-t from-red-100 to-orange-400'>
      <header className='bg-white'>
        <nav className='flex justify-between w-[92%] mx-auto items-center py-2'>
        {/* Logo  */}
            <div>
                <h1 className="font-bold text-3xl">Butterfly</h1>
            </div>
        {/* Menu */}
            <div>
            <ul className="flex items-center gap-4">
                    <li><a className="hover:text-gray-500 font-medium" href="#">Home</a></li>
                    <li><a className="hover:text-gray-500 font-medium" href="#">Product</a></li>
                    <li><a className="hover:text-gray-500 font-medium" href="#">About</a></li>
                    <li><a className="hover:text-gray-500 font-medium" href="#">Contact</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 font-bold">Sign Up</button>
                <button className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 font-bold">Log In</button>
              </div> 
        </nav>
      </header>
    </section>
  )
}

export default App
