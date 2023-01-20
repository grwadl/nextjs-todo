import NavButtons from "./NavButtons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="w-full py-5">
      <div className="padded-section">
        <h3 className="header-title flex items-center justify-center text-2xl font-bold text-blue">
          Note
        </h3>
        <NavButtons />
      </div>
    </header>
  );
}

export default Header;
