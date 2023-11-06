import Image from "next/image";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Table from "./components/Table";

export default function Home() {
  return (
    <>
      <div className=''>
        <Hero />
        <Card />
        <Table />
      </div>
    </>
  );
}
