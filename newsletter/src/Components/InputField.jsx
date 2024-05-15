import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function InputField() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Valid email required")
      .required("Email Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("Email registrado com sucesso!");
  };

  return (
    <div className="flex flex-col mt-8">
      <form action="#">
        <div className="flex flex-col relative">
          <label htmlFor="email" className=" text-sm font-bold">
            Email address
          </label>
          <input
            className={`border outline-none rounded-md p-2 pl-4 mt-2 ${
              errors.email
                ? "bg-red-100 border-red-400 text-red-500"
                : "bg-white text-black"
            }`}
            type="email"
            placeholder="email@company.com"
            {...register("email", { required: true })}
          />
          <p className="text-red-400 font-bold text-sm absolute right-0 outline-none">
            {errors?.email?.message}
          </p>
        </div>

        <button
          onClick={() => handleSubmit(onSubmit)()}
          type="submit"
          className="bg-slate_gray text-white p-2 py-3 mt-4 rounded-md text-sm w-full"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default InputField;
