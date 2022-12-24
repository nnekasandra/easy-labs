import LoginButton from "./LoginButton";
const GetStarted = () => {
  return (
    <section className="bg-main-blue text-white text-center py-32">
      <h2 className="text-4xl py-20">You have to log In to Get Started</h2>
      <p className="text-2xl">
         <LoginButton name="LogIn Now" className="bg-main-blue hover:bg-blue p-3"/>
      </p>
    </section>
  );
};
export default GetStarted;
