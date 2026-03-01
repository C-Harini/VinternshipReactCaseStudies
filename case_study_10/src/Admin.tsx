import debounce from "lodash/debounce";

export default function Admin() {
  const fn = debounce(() => {
    console.log("Admin loaded");
  }, 300);

  fn();

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>This page uses lodash.</p>
    </div>
  );
}