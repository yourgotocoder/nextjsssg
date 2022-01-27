import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

const NewMeetupPage = () => {
    const addMeetupHandler = (enteredMeetup) => {
        console.log(enteredMeetup);
    };

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
