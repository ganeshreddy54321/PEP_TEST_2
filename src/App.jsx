// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//problem-1
// import { useState } from 'react'
// import './App.css'


// function Cat(){

// }

// function app(){
//   return(
//     <div>
//       <h2>😿 random cat fact</h2>
//       <Cat/>
//       <button>Get new fact</button>
//     </div>
//   );
// }



//problem-1
// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [fact, setFact] = useState("Click the button to load a cat fact!");
//   const [loading, setLoading] = useState(false);

//   const getCatFact = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://catfact.ninja/fact");
//       const data = await response.json();
//       setFact(data.fact);
//     } catch (error) {
//       setFact("Failed to load cat fact 😿");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCatFact();
//   }, []);

//   return (
//     <div className="container">
//       <div className="widget">
//         <h2>🐱 Cat Fact</h2>
//         <p>{loading ? "Loading..." : fact}</p>
//         <button onClick={getCatFact}>Get New Fact</button>
//       </div>
//     </div>
//   );
// }

// export default App;


//problem-2
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [repos, setRepos] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!username) return;

//     setLoading(true);
//     setError("");
//     setUser(null);
//     setRepos([]);

//     try {
//       const userRes = await fetch(
//         `https://api.github.com/users/${username}`
//       );

//       if (userRes.status === 404) {
//         throw new Error("User not found");
//       }

//       const userData = await userRes.json();
//       setUser(userData);
      
//       const repoRes = await fetch(
//         `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
//       );
//       const repoData = await repoRes.json();
//       setRepos(repoData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="git">
//     <div className="app">
//       <h3>GitHub Search</h3>

//       <form className="search-bar" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p className="info">Loading...</p>}
//       {error && <p className="error">{error}</p>}

//       {user && (
//         <>
//           <div className="profile-card">
//             <img src={user.avatar_url} alt="avatar" />
//             <div className="profile-info">
//               <h2>{user.login}</h2>
//               <p>{user.bio || "No bio available"}</p>
//               <div className="stats">
//                 <span>{user.followers} Followers</span>
//                 <span>{user.following} Following</span>
//                 <span>{user.public_repos} Repos</span>
//               </div>
//             </div>
//           </div>

//           <h3 className="repo-title">Latest Repositories</h3>
//           <div className="repo-list">
//             {repos.map((repo) => (
//               <div className="repo-item" key={repo.id}>
//                 <a href={repo.html_url} target="_blank">
//                   {repo.name}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//     </div>
//   );
// }

// export default App;


//problem-3
import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Fridge", price: 10000 },
    { id: 3, name: "AC", price: 30000 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const toggleCart = (product) => {
    if (cartItems.includes(product.id)) {
      setCartItems(cartItems.filter((id) => id !== product.id));
    } else {
      setCartItems([...cartItems, product.id]);
    }
  };

  const totalPrice = products
    .filter((product) => cartItems.includes(product.id))
    .reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container1">
    <div className="container2">
      <h2>Product List</h2>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className={
                    cartItems.includes(product.id)
                      ? "remove-btn"
                      : "add-btn"
                  }
                  onClick={() => toggleCart(product)}
                >
                  {cartItems.includes(product.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total">
        <strong>Total Price: {totalPrice}</strong>
      </div>
    </div>
    </div>
  );
}

export default App;


