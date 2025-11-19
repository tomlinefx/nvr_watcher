export default function CreditPage() {
  return (
    <div className="prose container py-10 prose-a:text-blue-600">
      <h1 className="mb-4 font-bold text-2xl"> クレジットまとめ </h1>
      <ul>
        <li>
          {" "}
          While our code is MIT licensed, the design of this avatar style is
          licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="noopener"
            target="_blank"
          >
            CC BY 4.0
          </a>
          . See <a href="#details">details</a> for more information.{" "}
        </li>
      </ul>
    </div>
  );
}
