function Footer(){
    return(
        <div>
            <div className="container-fluid bg-dark text-white">
                <div className="row justify-content-center">
                    <div className="col-3 mt-5 mb-5">
                        <h3 className="mb-5">Follow Us</h3>
                        <p><a href="#" className="link-light">Facebook</a></p>
                        <p><a href="#" className="link-light">Twitter</a></p>
                        <p><a href="#" className="link-light">Instagram</a></p>
                        <p><a href="#" className="link-light">Youtube</a></p>
                    </div>

                    <div className="col-3 mt-5 mb-5 text-center">
                        <h3 className="mb-5">Link</h3>
                        <p><a href="#" className="link-light">Schedule</a></p>
                        <p><a href="#" className="link-light">Speakers</a></p>
                        <p><a href="#" className="link-light">Contact</a></p>
                    </div>

                    <div className="col-3 mt-5 mb-5 text-end">
                        <h3 className="mb-5">Venue</h3>
                        <address>200,D-block,Green lane USA</address>
                        <p>edumark@gmail.com</p>
                        <p>+10 367 763 9437</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer