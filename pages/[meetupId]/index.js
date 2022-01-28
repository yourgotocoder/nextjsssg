import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetailComponent from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = (props) => {
    return (
        <Fragment>
            <MeetupDetailComponent
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            ></MeetupDetailComponent>
        </Fragment>
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://SuduGod:keYRing123@mongodb-graphql.qg7ft.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: "blocking",
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    console.log(selectedMeetup);

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
            },
        },
    };
}

export default MeetupDetailsPage;
