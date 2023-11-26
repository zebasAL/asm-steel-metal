import React from "react";
import Shell from "~/components/shell";

type Props = {
  title: string;
  children: JSX.Element;
};

export default function Dashboard({ children } : { children: JSX.Element }) {
  return (
    <>
      <Shell>
        <Content title="Dashboard">
          {children}
        </Content>
      </Shell>
    </>
  );
}

// -----------------------------------------------------------------------------------------------------

function Content({ title, children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="text-xl font-bold text-gray-600 border-b-2 border-blue-200 pt-6 pb-2 px-6">
        {title}
      </div>
      <div className="flex-1 my-6 mx-6 rounded-xl">{children}</div>
    </div>
  );
}
