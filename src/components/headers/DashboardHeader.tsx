type Props = {
  title?: string,
  action?: JSX.Element,
  children?: JSX.Element,
}

export default function DashboardHeader({ title = "Dashboard", action, children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="text-xl flex justify-between align-middle font-bold text-gray-600 border-b-2 border-blue-200 pt-6 pb-2 px-6">
        {title}

        {action}
      </div>
      {children}
    </div>
  );
}
