import { MongoClient } from 'mongodb';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Simple React Meetups." />
      </Head>
      <MeetupList meetups={props.meetups}>Home Page</MeetupList>
    </>
  );
}

export async function getStaticProps() {
  //fetch some data
  const client = await MongoClient.connect(
    `mongodb+srv://mongo:HPyVjzHv8tL87DOO@cluster0.aw8gauy.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
