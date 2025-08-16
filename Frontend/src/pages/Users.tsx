import { FaCheck } from "react-icons/fa";
import { useUserForm } from "../context/UserContext"
import { useNavigate } from "react-router-dom";

export default function Users() {
  const { tableData, selectedRole, setSelectedRole } = useUserForm();
  const navigate = useNavigate();
  const roleOptions = ["All", "Author", "Editor", "Subscriber", "Administrator"];
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-t from-sky-400 to-indigo-500">
      <div className="w-[60rem] bg-[#F1F7F8] rounded-md shadow p-4 space-y-5">
        <button type="button" className="w-fit bg-indigo-500 hover:bg-indigo-700 text-white px-2 py-1 rounded-md cursor-pointer disabled:bg-indigo-200" onClick={() => navigate('/')}>
          Add New User
        </button>
        <h2 className="text-center text-xl font-semibold">Users</h2>
        <div className="w-full">
          {roleOptions.map((item: string) => (
            <div key={item} className="inline-block">
              <input
                type="radio"
                name="form"
                id={item}
                value={item}
                className="peer hidden"
                onChange={(e) => setSelectedRole(e.target.value)}
                defaultChecked={selectedRole === "All" && item === "All" ? true : false}
              />
              <label
                htmlFor={item}
                className="cursor-pointer px-2 py-1 transition-colors duration-200 peer-checked:bg-sky-200 peer-checked:text-sky-700 peer-checked:rounded-t-md"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <div>Total Results: {tableData.length}</div>
        <div className="h-[35rem] overflow-y-scroll">
          <table className="w-full">
            <thead>
              <tr>
                {["No.", "Full Name", "Email", "Roles"].map((item) => {
                  return item === "Roles" ? (
                    <th className="px-2 text-center" colSpan={4} >{item}</th>
                  ) : <th className="px-2 text-center">{item}</th>
                })}
              </tr>
              <tr className="border-b-1">
                <td colSpan={3} />
                {selectedRole !== "All" ? (
                  <td colSpan={4} className="px-2 text-center">
                    {selectedRole}
                  </td>
                ) : (
                  <>
                    {
                      roleOptions.filter(i => i !== "All").map((item) =>
                      (<>
                        <td className="px-2 text-center">
                          {item}
                        </td>
                      </>)
                      )
                    }
                  </>
                )
                }
              </tr>
            </thead>
            <tbody>
              {selectedRole === "All" ? tableData.map((item: any, index) => {
                const roles = roleOptions.filter(i => i !== "All"); // ["Author","Editor","Subscriber","Administrator"]
                return (
                  <tr key={item.id} className="border-b-[1px] border-gray-300 hover:bg-gray-200">
                    <td className="w-[5%] py-2">{index + 1}</td>
                    <td className="w-[30%] py-2">{item.full_name}</td>
                    <td className="w-[20%] py-2">{item.email}</td>
                    {
                      roles.map((r: string) => (
                        <td key={r} className="py-2 text-center">
                          <div className="w-full flex justify-center">
                            {item.roles?.includes(r) ? (<FaCheck className="text-green-500" />) : null}
                          </div>
                        </td>
                      ))
                    }
                  </tr>
                );
              }) : tableData.map((item: any, index) => {
                return (
                  <tr key={item.id} className="border-b-[1px] border-gray-300 hover:bg-gray-200">
                    <td className="w-[5%] py-2">{index + 1}</td>
                    <td className="w-[30%] py-2">{item.full_name}</td>
                    <td className="w-[20%] py-2">{item.email}</td>
                    <td className="py-2 text-center" colSpan={4}>
                      {item.role_name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
