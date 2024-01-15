import { SideNav } from "~/components/navigation/dashboard";
import { Breadcrumb } from "~/components/ui"

type Props = {
  children: JSX.Element;
};

export default function Dashboard({ children }: Props) {
  return (
    <>
      <div className="min-h-screen flex grid-cols-custom-sidenav-layout">
        <SideNav />
        <div className="w-full flex flex-col">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </>
  );
}