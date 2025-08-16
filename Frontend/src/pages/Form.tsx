import InputBox from "../components/InputBox";
import { useFunction } from "../context/FunctionContext";
import { useUserForm } from "../context/UserContext";


export default function Form() {
    const { CapitalizeWord, EmailValidation } = useFunction();
    const { value, setValue, handleSubmit } = useUserForm();
    return (
        <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-t from-sky-400 to-indigo-500">
            <div className="w-[25rem] bg-[#F1F7F8] rounded-md shadow">
                <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-2">
                    <h2 className="text-center mb-2 text-lg font-semibold">Upload User</h2>
                    <div className="flex flex-col gap-4 justify-between mb-2">
                        {["full_name", "email", "role"].map((item: any) => {
                            return (
                                <InputBox
                                    placeholder={CapitalizeWord(item)}
                                    type={item === "full_name" ? "text" : item}
                                    value={value}
                                    setValue={setValue}
                                />
                            )
                        })}
                    </div>
                    {value.full_name === "" ||
                        value.email === "" ||
                        value.roles.length < 1 ? (<span className="text-end text-[.8rem] text-red-500">*Please Fill Up All the fields</span>) : ""}
                    <div className="mx-auto mt-2">
                        <button type="submit" className="w-fit bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md cursor-pointer disabled:bg-indigo-200"
                            disabled={
                                value.full_name === "" ||
                                value.email === "" ||
                                !EmailValidation(value.email) ||
                                value.roles.length < 1
                            }>
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
