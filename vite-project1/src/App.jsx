import './App.css'

function App() {


  return (
    // form creat using css
    // ------------------------

    // <div className="container">
    //   <div className="fom">
    //     <form action="">
    //       <h1>login Form</h1>

    //       <div className="fom-1">
    //         <label htmlFor="">Email or Phone</label><br />
    //         <input type="text" /><br />
    //       </div>

    //       <div className="fom-1">
    //         <label htmlFor="">Password</label><br />
    //         <input type="password" /><br />
    //         <label htmlFor="" className='lab'>Forget password?</label>
    //       </div>

    //       <button>LOGIN</button>

    //       <footer>Not a member? Signup Now</footer>
    //     </form>
    //   </div>
    // </div>



    // form creat using bootstrap
    // ----------------------------------

    <div className='container'>
      <div className='row justify-content-center pt-5 pb-5'>
        <div className='col-5 bg-white mt-5 mb-5'>
          <form action="" className='p-4'>
            <h1 className='text-center mt-5 mb-5 fw-bold'>Login Form</h1>

            <div>
              <label htmlFor="">Email or Phone</label><br />
              <input type="text" className='w-100 mb-5 lh-lg' />
            </div>

            <div>
              <label htmlFor="">Password</label><br />
              <input type="password" className='w-100 lh-lg' />
              <div className='form-text text-info mb-5'>Forget Password?</div>
            </div>

            <button className='border border-0 w-100 p-2 mb-5 text-white fs-5'>LOGIN</button>

            <footer className='text-center mb-5'>Not a member? <span className='text-info'>Signup Now</span></footer>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
