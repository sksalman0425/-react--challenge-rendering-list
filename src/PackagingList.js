// Conditional rendering using if statement
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} ✔</li>;
  }//else part is given below
  return <li>{name}</li>;
}

// Conditional Rendering using Ternary Operator
// function Item({ name, isPacked }) {
//   return <li>{isPacked ? <del>{name + "✔"}</del> : name}</li>;
// }

// const x=1
// x>2 && x<10  //it works as conditional  operator as is L.H.S is true then and then only R.H.S condition check
// Conditional rendering Logical And &&
// function Item({ name, isPacked }) {
//   return (
//     <li>
//       {name} {isPacked && "✔"}
//     </li>
//   );
// }

// Conditional rendering using variable
// function Item({ name, isPacked }) {
//     let content = name;
//     if (isPacked) {
//       content = <del>{name + " ✔"}</del>; 
//     }//below is else part
//     return <li>{content}</li>;
//   }
  
  export default function PackagingList() {
    return (
      <section>
        <h1>Azhar Academy Packing List</h1>
        <ul>
          <Item name={"Helmet"} isPacked={true} />
          <Item name={"Jeans"} isPacked={false} />
          <Item name={"Laptop"} isPacked={true} />
        </ul>
      </section>
    );
  }