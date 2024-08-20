import globeLogo from "../assets/Globe.svg";
export default function TitleBar() {
  return (
    <div>
      <header>
        <img src={globeLogo} />
        <span>my travel journal.</span>
      </header>
    </div>
  );
}
