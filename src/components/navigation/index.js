import {useLocation, Link} from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    return(
        <div className="list-group">
            <div className="list-group-item bg-black text-white text-opacity-75">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-bars me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Menu
                    </div>
                </div>
            </div>
            <Link to="/"
                  className={`list-group-item list-group-item-action ${location.pathname ==="/" ? 'active' : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-home me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/search" className={`list-group-item list-group-item-action ${location.pathname.includes('/search') ? 'active' : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-search me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Search
                    </div>
                </div>
            </Link>
            <Link to="/profile" className={`list-group-item list-group-item-action ${location.pathname === '/profile' ? 'active' : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-user me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Profile
                    </div>
                </div>
            </Link>
            <Link to="/posts" className={`list-group-item list-group-item-action ${location.pathname === '/posts' ? 'active' : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-edit me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Posts
                    </div>
                </div>
            </Link>
            <Link to="/plans" className={`list-group-item list-group-item-action ${location.pathname === '/plans' ? 'active' : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <i className="fas fa-calendar me-3"></i>
                    </div>
                    <div className="d-none d-lg-block col-9 ">
                        Plans
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Navigation;