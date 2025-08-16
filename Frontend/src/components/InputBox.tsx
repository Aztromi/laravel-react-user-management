import type { FC } from "react"
import type { InputBoxProps } from "../interfaces/InputBox"
import { useFunction } from "../context/FunctionContext";

const InputBox: FC<InputBoxProps> = ({
    placeholder,
    type,
    value,
    setValue,
}) => {
    const { EmailValidation } = useFunction();
    const roleOptions = ["Author", "Editor", "Subscriber", "Administrator"];
    const handleRoleChange = (role: string) => {
        setValue((prev) => {
            const roles = prev.roles.includes(role)
                ? prev.roles.filter((r) => r !== role)
                : [...prev.roles, role];
            return { ...prev, roles };
        });
    };
    return type === "email" ? (
        <div className="relative w-full">
            <input
                type="text"
                id={placeholder}
                className={`peer w-full border bg-[#F1F7F8] rounded p-2 focus:outline-none placeholder-transparent focus:bg-[#F1F7F8] ${value.email === ""
                    ? "border-gray-300"
                    : EmailValidation(value.email)
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
                value={value.email}
                placeholder={placeholder}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
                required
            />
            <label
                htmlFor={placeholder}
                className="absolute left-2 top-2 text-gray-600 bg-[#F1F7F8] text-md px-2 transform transition-all peer-placeholder-shown:top-[75%] peer-disabled:peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-100%] peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-[-90%] peer-focus:scale-90 peer-valid:translate-y-[-90%] peer-valid:scale-90"
            >
                {placeholder}
            </label>
            {value.email === "" ? (
                ""
            ) : !EmailValidation(value.email) ? (
                <label className="text-[0.8rem] text-red-600">
                    Enter a valid email
                </label>
            ) : (
                ""
            )}
        </div>
    ) : type === "role" ? (
        <div className="flex flex-col gap-2">
            Select User Role
            <div className="ml-2 flex flex-col gap-2">
                {roleOptions.map((role) => (
                    <label key={role} className="w-fit">
                        <input
                            type="checkbox"
                            value={role}
                            checked={value.roles.includes(role)}
                            onChange={() => handleRoleChange(role)}
                            className="peer h-5 w-5 hidden"
                        />
                        <span className="peer-checked:bg-sky-200 peer-checked:text-sky-600 px-2 py-1 rounded-md">{role}</span>
                    </label>
                ))}
            </div>
        </div>
    ) : (
        <div className="relative w-full">
            <input
                type="text"
                id={placeholder}
                className="peer w-full border bg-[#F1F7F8] rounded p-2 focus:outline-none placeholder-transparent focus:bg-[#F1F7F8] border-gray-300"
                value={value.full_name}
                placeholder={placeholder}
                onChange={(e) => setValue({ ...value, full_name: e.target.value })}
                required
            />
            <label
                htmlFor={placeholder}
                className="absolute left-2 top-2 text-gray-600 bg-[#F1F7F8] text-md px-2 transform transition-all peer-placeholder-shown:top-[75%] peer-disabled:peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-100%] peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:translate-y-[-90%] peer-focus:scale-90 peer-valid:translate-y-[-90%] peer-valid:scale-90"
            >
                {placeholder}
            </label>
        </div>
    )
}
export default InputBox;
