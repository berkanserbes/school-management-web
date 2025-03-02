import Image from "next/image";
import TableSearchInput from "@/components/table-search-input";
import Table from "@/components/table";
import { /*role,*/ teachersData } from "@/lib/data";
import Link from "next/link";
//import { role } from "@/lib/data";

type TeacherProp = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (teacher: TeacherProp) => (
    <tr
      key={teacher.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={teacher.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{teacher.name}</h3>
          <p className="text-xs text-gray-500">{teacher?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{teacher.teacherId}</td>
      <td className="hidden md:table-cell">{teacher.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{teacher.classes.join(",")}</td>
      <td className="hidden md:table-cell">{teacher.phone}</td>
      <td className="hidden md:table-cell">{teacher.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${teacher.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {/* {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={teacher.id} />
          )} */}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4">
      {/* TOP start */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md-flex-row items-center gap-4 w-full md:w-auto">
          <TableSearchInput />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )} */}
            {/* <FormModal table="teacher" type="create" />  */}
          </div>
        </div>
      </div>
      {/* TOP end */}
      {/* Table List start */}
      <Table columns={columns} data={teachersData} renderRow={renderRow} />
      {/* Table List end */}
    </div>
  );
};

export default TeacherListPage;
