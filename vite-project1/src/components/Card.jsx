function Card() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-3 shadow-lg mt-5 ps-0 pe-0">
                    <div className="card border border-0 text-center">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" className="card-img-top rounded-0" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">CHRIS ROY</h3>
                                <h6 className="text-danger">JUNIOR DEVEOPER</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia quis voluptatum nam repellat laborum sit in labore voluptate itaque</p>
                                <a href="#" className="btn btn-primary">Read more</a>
                            </div>
                    </div>
                </div>

                <div className="col-3 shadow-lg mt-5 p-3 ms-5 ps-0 pe-0 pt-0">
                    <div className="card border border-0 text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYbd1JZD378r1gU340BAouladQYMt89YN9tBTnkZ2_VfIqRq3LrqbvJwA21xLNwfdbCo&usqp=CAU" className="card-img-top rounded-0" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">JASON ROY</h3>
                                <h6 className="text-danger">UI/UX DESIGNER</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia quis voluptatum nam repellat laborum sit in labore voluptate itaque</p>
                                <a href="#" className="btn btn-primary">Read more</a>
                            </div>
                    </div>
                </div>

                <div className="col-3 shadow-lg mt-5 p-3 ms-5 ps-0 pe-0 pt-0">
                    <div className="card border border-0 text-center">
                        <img src="https://thumbs.dreamstime.com/b/business-man-standing-confident-smile-portrait-successful-suit-smiling-proud-outdoors-44304293.jpg" className="card-img-top rounded-0" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">CHRIS</h3>
                                <h6 className="text-danger">FULL-STACK DEVEOPER</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia quis voluptatum nam repellat laborum sit in labore voluptate itaque</p>
                                <a href="#" className="btn btn-primary">Read more</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card