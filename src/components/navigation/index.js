import {useLocation, Link} from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    return(
        <div className="list-group">
            <div className="list-group-item">
                Meal Shopper
            </div>
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-calendar me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        My Plan
                    </div>
                </div>
            </div>
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-store me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Ingredients
                    </div>
                </div>
            </div>
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-heart me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Favorites
                    </div>
                </div>
            </div>
            <Link to="/search" className={`list-group-item list-group-item-action ${location.pathname === '/search' ? 'active' : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-search me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Search
                    </div>
                </div>
            </Link>
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-user me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Profile
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navigation;