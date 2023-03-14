import { recipes } from "./data2";

// challenge ---2
export default function RecipeList() {
  return (
    //if return statement in any function more than one then use <></> or <div></div> to wrapp the staements
    <>
      <h1>Recipes</h1>
      {recipes.map((r) => (
        //if return statement in any function more than one then use <></> or <div></div> to wrapp the staements
        <>
          <h1>{r.name}</h1>
          ingredients:
          <ul>
            {r.ingredients.map((i) => (
            //if return statement in any function more than one then use <></> or <div></div> to wrapp the staements
              <>
                <li>{i}</li>
              </>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}

// challenge ---3

// function Recipe({id,name,ingredients}){
//     return(
//         <div key={id}>
//             <h3>{name}</h3>
//             <ul>
//             {ingredients.map((item)=>(<li>{item}</li>))}
//             </ul>
//         </div>

//     )
// }

// export default function RecipeList() {
//     return (
//       <div>
//         <h1>Recipes</h1>
//         {recipes.map((r) => (
//           <Recipe id={r.id} name={r.name} ingredients={r.ingredients}/>
//         ))}
//       </div>
//     );
//   }

  
// challenge ---4
//Your job is to insert an <hr /> separator between each paragraph except index 0 and last
// const poem = {
//     lines: [
//       'I write, erase, rewrite',
//       'Erase again, and then',
//       'A poppy blooms.'
//     ]
//   };
  
//   export default function Poem() {
//     return (
//       <article>
//         {poem.lines.map((item, index) =>(
//         //if return statement in any function more than one then use <></> or <div></div> to wrapp the staements
//          <>
//         { index > 0 && <hr/>}
//           <p key={index}>
//             {item}
//           </p>
//           </>
//         ))}
//       </article>
//     );
//   }