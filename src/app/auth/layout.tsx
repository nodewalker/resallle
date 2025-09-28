const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <div className="max-w-[450px] w-full mx-auto mt-[60px] px-[10px]">
      {children}
    </div>
  );
};

export default AuthLayout;
