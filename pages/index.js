import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    );
}

export async function getStaticProps() {
    console.log(process.env.DB_URL);
    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => {
                return {
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString(),
                };
            }),
        },
        revalidate: 10,
    };
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export default HomePage;
