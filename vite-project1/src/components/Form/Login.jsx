function Login() {
    return (
        <div>
            <div className="container-fluid bg-danger">
                <h1 className="p-5 text-center text-white">Login Form</h1>
                <div className="row justify-content-center pb-5">
                    <div className="col-10 col-xl-4 bg-dark">
                        <form>
                            <fieldset>
                                <h1 className="m-3 text-center text-white">Logln!</h1>
                                <div className="mb-3 col-12 p-3">
                                    <label className="form-label fw-bold text-white">User Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="mb-3 col-12 p-3">
                                    <label className="form-label fw-bold text-white">Password</label>
                                    <input type="password" className="form-control rounded-0" />
                                </div>
                                <div className="form-check mb-3 ps-5">
                                    <input className="form-check-input border-danger bg-transparent rounded-0" type="checkbox"
                                        value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-white" for="flexCheckDefault">Remember me ?</label>
                                </div>
                                <div className="form-check mb-3 col-12 p-3">
                                    <input type="checkbox" className="btn-check align-center" id="btn-check" autocomplete="off" />
                                    <label
                                        className="btn btn-danger m-5 ms-0 ms-md-0 m-md-4 m-lg-0 mb-lg-5 mt-lg-3 w-100"
                                        for="btn-check">Login</label>
                                </div>

                                <h4 className="text-center pb-5 text-white">Forget password?</h4>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login