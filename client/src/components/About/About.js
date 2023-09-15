import CheckOut from "../Cart/Checkout";
const About =()=>{
    return (
      <div className="h-full w-full">
        <div className="h-32 opacity-0"></div>
        <p className="justify-center text-3xl text-bold border-2 rounded-md border-black p-4 bg-gray-100 m-4">
          <p>
            This is an Ecommerce Website Made By Our Group using MERN Stack
          </p>
          <p>
            This Website has Dynamically changing data and it has features like
            cart etc
          </p>
          <p >
            Our Group consists of Five Group Members:
          </p>
        </p>
        <table className="border-black border-2  bg-gray-100 m-4 p-3">
          <tr className="border-black border-2 left-72">
            <th>Name</th>
            <th>CMS ID</th>
          </tr>
          <tr className="border-black border-2">
            <td className="border-black border-2 p-3">
              Ghulam Hussain Khan Sherwani{" "}
            </td>
            <td>366549</td>
          </tr>
          <tr className="border-black border-2">
            <td className="border-black border-2 p-3">Abdul Basit Sajid </td>
            <td>386804</td>
          </tr>
          <tr className="border-black border-2">
            <td className="border-black border-2 p-3">Mohammad Irfan</td>
            <td>373668</td>
          </tr>
          <tr className="border-black border-2">
            <td className="border-black border-2 p-3">Rayyan Lakhani </td>
            <td>365991</td>
          </tr>
          <tr className="border-black border-2">
            <td className="border-black border-2 p-3">Mohammad Ibrahim</td>
            <td>398789</td>
          </tr>
        </table>
      </div>
    );
}
export default About;