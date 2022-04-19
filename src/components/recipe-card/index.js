import "./style.css";

const RecipeCard = () => {
    return(
        <div className="card wd">
            <img src={require("../../images/grey.png")} className="" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Test Title</h5>
                <p className="card-text">Test Text</p>
            </div>
        </div>
    );
};
export default RecipeCard;