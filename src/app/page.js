import DashBoard from "./components/Dashboard";

async function getData() {
  const res = await fetch('http://localhost:3000/data.json',{cache:"no-cache"});

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return(
    <DashBoard data={data}/>
  )
}