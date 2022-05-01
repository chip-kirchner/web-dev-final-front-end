import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import PlanItem from "../plan-screen/plan-item";
import PlannerContent from "../planner-content";
import * as action from "../actions/plan-actions";
import PostItem from "../post-screen/post-item";

const LoggedIn = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const posts = useSelector(state => state.posts);
    const textRef = useRef();

    const myPlan = {...profile.plan, title: `${profile.name}'s Plan`, user: profile};

    const handlePublish = async (e) => {
        const newPlan = {...myPlan, title: textRef.current.value, publish: true};
        await action.createPlan(newPlan, dispatch);
    }

    return (
        <>
            <h1>Hi {profile.name}!</h1>
            <div className="row">
                <div className="col-xl-8">
                    <h3>Your Plan!</h3>
                    <PlannerContent>
                        <button data-bs-toggle="modal" data-bs-target="#publish" className="btn btn-primary">Publish Plan</button>
                    </PlannerContent>
                    <div className="mt-2">
                        <PlanItem plan={myPlan} disable={true}/>
                    </div>
                </div>
                <div className="d-none d-xl-block col-xl-4">
                    <h3>Your Posts!</h3>
                    <div className="mt-2">
                        {posts.filter(post => post.user._id === profile._id).map(post => <PostItem post={post}/>)}
                    </div>

                </div>

            </div>


            <div className="modal fade" id="publish" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="publishLabel">Some additional details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="planName">Give it a name!</label>
                            <input type="text" className="form-control" id="planName" ref={textRef} placeholder="Plan Name"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
                            <button onClick={handlePublish} data-bs-dismiss="modal" type="button" className="btn btn-primary">Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoggedIn;