import { Fragment } from "react";
import MeetupDetailComponent from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
    return (
        <Fragment>
            <MeetupDetailComponent
                image="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
                title="First Meetup"
                address="5th Avenue, NY"
                description="Our first meetup"
            ></MeetupDetailComponent>
        </Fragment>
    );
};

export default MeetupDetailsPage;
