//JSX: 1 parent
//fragment

import './style.css';

const MyComponent = () => {
    const hoidanit = {
        name: "hoidanit",
        age: 20,
        isStudent: true
    };
  return (
    <>
      <div> {JSON.stringify(hoidanit)} eric & hoidanit </div>
      <div>{console.log("Kien")}</div>
      <div className="child"
      style={{borderRadius: "10px"}}>test</div>
    </>
  );
}

export default MyComponent;