import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Church_of_Saint_Simeon_Stylites_01.jpg/220px-Church_of_Saint_Simeon_Stylites_01.jpg",
        address: "Some address",
        description: "This is a first meetup",
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
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
