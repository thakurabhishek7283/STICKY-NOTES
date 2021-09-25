const date = new Date();
const year = date.getFullYear();
export default function Footer() {
  return (
    <footer>
      <p>Copyright@{year}</p>
    </footer>
  );
}
