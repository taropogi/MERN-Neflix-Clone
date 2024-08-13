import FormLogin from "../features/auth/FormLogin";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center mt-10 mx-3 pb-24">
      <div className="w-full max-w-md p-8 space-y-6 bg-black/40 rounded-md shadow-md  ">
        <h1 className="text-center text-white text-2xl font-bold mb-4  ">
          Login
        </h1>
        <FormLogin />
      </div>
    </div>
  );
}
