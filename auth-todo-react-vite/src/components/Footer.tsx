export function Footer() {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateTime
  );

  return (
    <footer className="w-11/12 max-w-[972px] flex justify-between text-base opacity-30 mt-3">
      <small>
        &copy; {month} {year} Copyright by odewale_mdee
      </small>
      <small>v1.0</small>
    </footer>
  );
}
