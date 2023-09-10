// components
import { clientApi } from "@/services/api";
import UserHeader from "./components/header";
import { MainStyles } from "./components/MainStyles";

export const getData = async (id: number) => {
  return await clientApi.get(`/users/${id}`).then((data) => data.data.data);
};

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: number };
}) {
  const data = await getData(params?.id);
  return (
    <>
      <UserHeader user={data} />
      <MainStyles>{children}</MainStyles>
    </>
  );
}
