import Link from "next/link";
import "./styles.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  link: string;
}

export default function ButtonPromo(props: Props) {
  return (
    <Link href={props.link} className={`btn-promo`}>
      {props.text}
    </Link>
  );
}
