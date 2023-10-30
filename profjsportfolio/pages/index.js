import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Profile from './components/profile';
import linksList from './components/linksList';
// import multiCarousel from './components/carousel';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold underline">Lets just slam pow an image in here real quick.</h1>
        {Profile()}
        {linksList()}
        {/* {multiCarousel()} */}
        {/* {Projects(projData.projects)} */}
    </main>
  );
}
