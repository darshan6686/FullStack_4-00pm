
import './App.css'

function App() {


  return (
    <div className="container">
      <div className="fom">
        <form action="">
          <h1>login Form</h1>

          <div className="fom-1">
            <label htmlFor="">Email or Phone</label><br />
            <input type="text" /><br />
          </div>

          <div className="fom-1">
            <label htmlFor="">Password</label><br />
            <input type="password" /><br />
            <label htmlFor="" className='lab'>Forget password?</label>
          </div>

          <button>LOGIN</button>

          <footer>Not a member? Signup Now</footer>
        </form>
      </div>
    </div>
  )
}

export default App
