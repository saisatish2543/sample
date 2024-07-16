import logo from "../assets/images/AS-logo.jpeg"

const Title = () => (
  <a href="/" >
    <img className="logo" src={logo} alt="App-Logo"style={{width:"100px"}} />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between w-[95%] m-auto">
      <Title />
      <div className="flex justify-center items-center">
        <ul  className="flex justify-center items-center gap-4">
          <li>Home </li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};


export default Header;