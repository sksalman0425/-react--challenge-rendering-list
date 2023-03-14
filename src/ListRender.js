// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

//generally when same item present in array/object we have insert key to identify them uniquelly

// export default function List() {
//   const listItems = people.map((person,index) =>
//     {
//       return <li key={index}>{person}</li>;
//     }
//   );
//   return <ul>{listItems}</ul>
// }

// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//   },
//   {
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//   },
//   {
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//   },
// ];
// export default function List() {
  // for getting all data from array
  // const listItems = people.map((people,index) =>
  //   {
  //     return <li key={index}>{people.name}: {people.profession}</li>;
  //   }
  // );
  // return <ul>{listItems}</ul>

  // for getting only chemists data

//   const chemists = people.filter((p) => p.profession === "chemist");
//   const listItems = chemists.map((chemists, index) => {
//     return (
//       <li key={index}>
//         {chemists.name}: {chemists.profession}
//       </li>
//     );
//   });
//   return <ul>{listItems}</ul>;
// }

//why we are using key in React????
// File names in a folder and JSX keys in an array serve a similar purpose.
// They let us uniquely identify an item between its siblings.
// A well-chosen key provides more information than the position within the array.
// Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

import { people } from "./data";
import { getImageUrl } from "./utlis";
export default function ListRender() {
  // for displaying all data profile

  // const listItems = people.map((person) => (
  //   <li key={person.id}>
  //     <img src={getImageUrl(person)} alt={person.name} />
  //     <p>
  //       <b>{person.name}:</b>
  //       {" " + person.profession + " "}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // )); 
  // console.log("List itemes", listItems);
  // return <ul>{listItems}</ul>;

  // for displaying data profile of chemist only
  const chemists = people.filter((p) => p.profession === "chemist"); 
  const everyOneElse=people.filter((p)=>p.profession !== "chemist");
  const chemistslistItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  )); 
  // for displaying data profile of other profession
  const everyOneElselistItems = everyOneElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  )); 


  return(
  <>
  <h1>Chemists</h1>
  <ul>{chemistslistItems}</ul>
  <h1>Others</h1>
  <ul>{everyOneElselistItems}</ul>
  </> 
  )
}
